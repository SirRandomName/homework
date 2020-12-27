import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SearchComponent} from './search.component';

const ROUTES: Routes = [
  {
    path: '',
    component: SearchComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class SearchRoutingModule {}
