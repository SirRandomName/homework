import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SearchBarComponent} from './search-bar/search-bar.component';
import {JumpToTopButtonComponent} from './jump-to-top-button/jump-to-top-button.component';
import {DialogComponent} from './dialog/dialog.component';
import {PipesModule} from '../pipes/pipes.module';
import {SnackBarComponent} from './snack-bar/snack-bar.component';

@NgModule({
  declarations: [SearchBarComponent, JumpToTopButtonComponent, DialogComponent, SnackBarComponent],
  exports: [SearchBarComponent, JumpToTopButtonComponent, DialogComponent],
  imports: [CommonModule, PipesModule],
  entryComponents: [SnackBarComponent]
})
export class ComponentsModule {}
