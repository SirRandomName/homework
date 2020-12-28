import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SearchBarComponent} from './search-bar/search-bar.component';
import {HeaderComponent} from './header/header.component';

@NgModule({
  declarations: [SearchBarComponent, HeaderComponent],
  exports: [SearchBarComponent, HeaderComponent],
  imports: [CommonModule]
})
export class ComponentsModule {}
