import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SearchBarComponent} from './search-bar/search-bar.component';
import {JumpToTopButtonComponent} from './jump-to-top-button/jump-to-top-button.component';
import {DialogComponent} from './dialog/dialog.component';
import {PipesModule} from '../pipes/pipes.module';

@NgModule({
  declarations: [SearchBarComponent, JumpToTopButtonComponent, DialogComponent],
  exports: [SearchBarComponent, JumpToTopButtonComponent, DialogComponent],
  imports: [CommonModule, PipesModule]
})
export class ComponentsModule {}
