import { Injectable, inject } from '@angular/core';
import {  ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateFn } from '@angular/router';
import {Router} from '@angular/router'

@Injectable({
  providedIn: 'root'
})
class PermissionsService {

  constructor(private router: Router) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    let user = localStorage.getItem('currentUser')
    if(user){
      return true;
    } else {
      this.router.navigate(['/login'])
    }
  }
}

export const AuthGuard: CanActivateFn = (next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean => {
  return inject(PermissionsService).canActivate(next, state);
}