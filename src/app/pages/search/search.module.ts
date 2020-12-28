import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SearchComponent} from './search.component';
import {SearchRoutingModule} from './search-routing.module';
import {SearchService} from './search.service';
import {ComponentsModule} from 'src/app/shared/components/components.module';
import {HttpClientModule} from '@angular/common/http';
import {MovieDetailsComponent} from './movie-details/movie-details.component';
import {PipesModule} from 'src/app/shared/pipes/pipes.module';
import {InfiniteScrollModule} from 'ngx-infinite-scroll';
import {CardsComponent} from './cards/cards.component';
import {CardComponent} from './cards/card/card.component';

@NgModule({
  declarations: [SearchComponent, MovieDetailsComponent, CardsComponent, CardComponent],
  providers: [SearchService],
  imports: [CommonModule, SearchRoutingModule, ComponentsModule, HttpClientModule, PipesModule, InfiniteScrollModule]
})
export class SearchModule {}
