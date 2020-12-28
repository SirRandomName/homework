import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SearchBarComponent} from './search-bar/search-bar.component';
import {HeaderComponent} from './header/header.component';
import {JumpToTopButtonComponent} from './jump-to-top-button/jump-to-top-button.component';
import {DialogComponent} from './dialog/dialog.component';
import {PipesModule} from '../pipes/pipes.module';

@NgModule({
  declarations: [SearchBarComponent, HeaderComponent, JumpToTopButtonComponent, DialogComponent],
  exports: [SearchBarComponent, HeaderComponent, JumpToTopButtonComponent, DialogComponent],
  imports: [CommonModule, PipesModule]
})
export class ComponentsModule {}
