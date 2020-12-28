import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PosterLinkPipe} from './poster-link.pipe';

@NgModule({
  declarations: [PosterLinkPipe],
  exports: [PosterLinkPipe],
  imports: [CommonModule]
})
export class PipesModule {}
