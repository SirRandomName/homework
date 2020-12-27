import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AuthService} from './core/auth/auth.service';
import {LoginAuthGuard} from './core/auth/login-auth.guard';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [AuthService, LoginAuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
