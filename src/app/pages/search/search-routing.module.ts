import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {BaseAuthGuard} from 'src/app/core/auth/base-auth.guard';
import {SearchComponent} from './search.component';

const ROUTES: Routes = [
  {
    path: '',
    component: SearchComponent,
    pathMatch: 'full',
    canActivate: [BaseAuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class SearchRoutingModule {}
