import {ApplicationRef, ComponentFactoryResolver, Injectable, Injector} from '@angular/core';
import {PortalService} from '../portal/portal.service';

@Injectable({
  providedIn: 'root'
})
export class DialogService extends PortalService {
  constructor(
    protected _componentFactoryResolver: ComponentFactoryResolver,
    protected _applicationRef: ApplicationRef,
    protected _injector: Injector
  ) {
    super(_componentFactoryResolver, _applicationRef, _injector);
  }
}
