import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PosterLinkPipe} from './poster-link.pipe';
import {HourCounterPipe} from './hour-counter.pipe';
import {GenreListPipe} from './genre-list.pipe';
import {GenreObjectPipe} from './genre-object.pipe';

@NgModule({
  declarations: [PosterLinkPipe, GenreListPipe, HourCounterPipe, GenreObjectPipe, GenreListPipe, GenreObjectPipe],
  exports: [PosterLinkPipe, GenreListPipe, HourCounterPipe, GenreObjectPipe],
  imports: [CommonModule]
})
export class PipesModule {}
