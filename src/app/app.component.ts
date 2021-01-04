import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {Subscription} from 'rxjs';
import {IUserState, UserState} from './core/auth/auth.model';
import {AuthService} from './core/auth/auth.service';
import {DialogService} from './core/dialog/dialog.service';
import {SnackBarService} from './core/snack-bar/snack-bar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('dialogContainer') dialogContainer!: any;
  @ViewChild('snackBarContainer') snackBarContainer!: any;
  userState!: IUserState;
  private userStateSub: Subscription;

  constructor(private _authService: AuthService, private _dialogService: DialogService, private _snackBarService: SnackBarService) {
    this.userStateSub = this._authService.userState$.subscribe((userSate: UserState) => {
      this.userState = userSate.getUserState();
    });
  }

  ngAfterViewInit() {
    this._dialogService.container = this.dialogContainer;
    this._snackBarService.container = this.snackBarContainer;
  }

  logout() {
    this._authService.logOut();
  }

  ngOnDestroy() {
    this.userStateSub.unsubscribe();
  }
}
