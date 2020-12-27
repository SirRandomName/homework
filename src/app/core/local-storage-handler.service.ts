import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/internal/Observable';
import {AuthStore} from './auth/auth.model';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageHandlerService {
  constructor() {}

  setItem(key: string, value: any): void {
    localStorage.setItem(key, value);
  }

  getItem(key: string): null | string {
    return localStorage.getItem(key);
  }

  removeItem(key: string): void {
    localStorage.removeItem(key);
  }

  clear(): void {
    localStorage.clear();
  }

  getUserNameFromStorage(): string {
    let userName = this.getItem(AuthStore.MAIL);
    if (userName === 'undefined' || userName === 'null' || userName === null) {
      return '';
    }
    return userName;
  }
}
