import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SearchComponent} from './search.component';
import {SearchRoutingModule} from './search-routing.module';
import {SearchService} from './search.service';
import {ComponentsModule} from 'src/app/shared/components/components.module';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [SearchComponent],
  providers: [SearchService],
  imports: [CommonModule, SearchRoutingModule, ComponentsModule, HttpClientModule]
})
export class SearchModule {}
