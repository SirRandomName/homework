import {ApplicationRef, ComponentFactoryResolver, Injectable, Injector} from '@angular/core';
import {SnackBarComponent} from 'src/app/shared/components/snack-bar/snack-bar.component';
import {ISnackBarOptions, SnackBarTypes} from 'src/app/shared/components/snack-bar/snack-bar.model';
import {PortalService} from '../portal/portal.service';

@Injectable({
  providedIn: 'root'
})
export class SnackBarService extends PortalService {
  constructor(
    protected _componentFactoryResolver: ComponentFactoryResolver,
    protected _applicationRef: ApplicationRef,
    protected _injector: Injector
  ) {
    super(_componentFactoryResolver, _applicationRef, _injector);
  }

  public openErrorSnackBar(text: string) {
    const options: ISnackBarOptions = {
      text: text,
      type: SnackBarTypes.ERROR
    };
    this.open(SnackBarComponent, options);
  }

  public openSuccessSnackBar(text: string) {
    const options: ISnackBarOptions = {
      text: text,
      type: SnackBarTypes.SUCCESS
    };
    this.open(SnackBarComponent, options);
  }
}
