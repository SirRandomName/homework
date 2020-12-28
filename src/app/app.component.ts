import {Component} from '@angular/core';
import {Subscription} from 'rxjs';
import {IUserState, UserState} from './core/auth/auth.model';
import {AuthService} from './core/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  userState!: IUserState;
  private userStateSub: Subscription;

  constructor(private _authService: AuthService) {
    this.userStateSub = this._authService.userState$.subscribe((userSate: UserState) => {
      this.userState = userSate.getUserState();
    });
  }

  logout() {
    this._authService.logOut();
  }

  ngOnDestroy() {
    this.userStateSub.unsubscribe();
  }
}
