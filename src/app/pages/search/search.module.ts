import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SearchComponent} from './search.component';
import {SearchRoutingModule} from './search-routing.module';
import {SearchService} from './search.service';

@NgModule({
  declarations: [SearchComponent],
  providers: [SearchService],
  imports: [CommonModule, SearchRoutingModule]
})
export class SearchModule {}
