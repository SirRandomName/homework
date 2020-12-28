import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PosterLinkPipe} from './poster-link.pipe';
import {GenreObjectsPipe, GenrePipe, GenresPipe} from './genre.pipe';
import {HourCounterPipe} from './hour-counter.pipe';

@NgModule({
  declarations: [PosterLinkPipe, GenrePipe, GenresPipe, HourCounterPipe, GenreObjectsPipe],
  exports: [PosterLinkPipe, GenrePipe, GenresPipe, HourCounterPipe, GenreObjectsPipe],
  imports: [CommonModule]
})
export class PipesModule {}
