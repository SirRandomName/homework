import {ComponentPortal, DomPortalOutlet} from '@angular/cdk/portal';
import {ApplicationRef, ComponentFactoryResolver, ComponentRef, ElementRef, EventEmitter, Injectable, Injector} from '@angular/core';
import {take} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PortalService {
  private portalHost!: any;
  private portal!: ComponentPortal<any>;
  container!: ElementRef;

  constructor(
    protected _componentFactoryResolver: ComponentFactoryResolver,
    protected _applicationRef: ApplicationRef,
    protected _injector: Injector
  ) {}

  createPortalHost() {
    this.portalHost = new DomPortalOutlet(
      this.container.nativeElement,
      this._componentFactoryResolver,
      this._applicationRef,
      this._injector
    );
  }

  /**
   * Need a function ("init()") if you want to set data on the fly in the component.
   * Use an EventEmitter ("close") to close the component
   */
  open(component: any, data?: any): ComponentRef<any> {
    if (this.portalHost === undefined) {
      this.createPortalHost();
    }
    this.portal = new ComponentPortal(component);
    const portalComponentRef: ComponentRef<any> = this.portalHost.attachComponentPortal(this.portal);
    if (data !== undefined) {
      portalComponentRef.instance.init(data);
    }
    portalComponentRef.instance.close.pipe(take(1)).subscribe(() => this.close());
    return portalComponentRef;
  }

  close() {
    this.portalHost.detach();
  }
}
