import {Injectable} from '@angular/core';
import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {ROUTING_TREE} from 'src/app/app-routing.model';
import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class BaseAuthGuard implements CanActivate {
  constructor(private _auth: AuthService, private _router: Router) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this._auth.isAuthenticated()) {
      return true;
    }
    this._router.navigate([ROUTING_TREE.login.path]);
    return false;
  }
}
