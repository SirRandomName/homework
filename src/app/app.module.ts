import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AuthService} from './core/auth/auth.service';
import {LoginAuthGuard} from './core/auth/login-auth.guard';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [AuthService, LoginAuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
