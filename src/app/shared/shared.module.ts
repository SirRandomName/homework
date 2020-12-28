import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PipesModule} from './pipes/pipes.module';
import {ComponentsModule} from './components/components.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, PipesModule, ComponentsModule]
})
export class SharedModule {}
