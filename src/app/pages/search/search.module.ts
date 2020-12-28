import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SearchComponent} from './search.component';
import {SearchRoutingModule} from './search-routing.module';
import {SearchService} from './search.service';
import {ComponentsModule} from 'src/app/shared/components/components.module';
import {HttpClientModule} from '@angular/common/http';
import {MovieDetailsComponent} from './movie-details/movie-details.component';

@NgModule({
  declarations: [SearchComponent, MovieDetailsComponent],
  providers: [SearchService],
  imports: [CommonModule, SearchRoutingModule, ComponentsModule, HttpClientModule]
})
export class SearchModule {}
