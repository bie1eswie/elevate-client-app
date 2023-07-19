import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AbstractServiceAuthentication } from '../services/authentication.service/authentication.service.abstract';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private accountService: AbstractServiceAuthentication, private router: Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (!this.accountService.isLoggedIn()) {
        this.router.navigate(['/account']); // go to login if not authenticated
        return false;
      }
    return true;
  }

}
