import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ROUTING_TREE} from './app-routing.model';
import {LoginComponent} from './pages/login/login.component';

const ROUTES: Routes = [
  {
    path: '',
    redirectTo: ROUTING_TREE.login.path,
    pathMatch: 'full'
  },
  {
    path: ROUTING_TREE.login.path,
    component: LoginComponent,
    pathMatch: 'full'
  },
  {
    path: ROUTING_TREE.search.path,
    loadChildren: () => import('./pages/search/search.module').then((m) => m.SearchModule)
  },
  {
    path: '**',
    redirectTo: ROUTING_TREE.login.path
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      ROUTES
      // {
      //   preloadingStrategy: PreloadAllModules
      // }
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
