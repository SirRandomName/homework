import {Injectable} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {BehaviorSubject} from 'rxjs';
import {ROUTING_TREE} from 'src/app/app-routing.model';
import {LocalStorageHandlerService} from '../local-storage-handler.service';
import {AuthStore, UserState} from './auth.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userState = new UserState();
  userState$: BehaviorSubject<UserState> = new BehaviorSubject<UserState>(this.userState);

  constructor(private _router: Router, private _localStorageHandlerService: LocalStorageHandlerService) {
    const userName = this._localStorageHandlerService.getUserNameFromStorage();
    this.changeUserState(userName);
  }

  public changeUserState(userName: string | null): void {
    this.userState.setUserState(userName);
    this._localStorageHandlerService.setItem(AuthStore.MAIL, userName);
    this.userState$.next(this.userState);
  }

  public resetUserState(): void {
    this.changeUserState('');
  }

  public isAuthenticated(): boolean {
    return this.userState.getUserState().isLogedIn;
  }

  // todo: feedback! - toast?
  public logIn(formGroup: FormGroup): void {
    if (formGroup.valid) {
      this.changeUserState(formGroup.get('username')?.value);
      this._router.navigate([ROUTING_TREE.search.path]);
    } else {
      alert('Your username or password is incorrect!');
    }
  }

  public logOut(): void {
    this.resetUserState();
    this._router.navigate([ROUTING_TREE.login.path]);
  }
}
