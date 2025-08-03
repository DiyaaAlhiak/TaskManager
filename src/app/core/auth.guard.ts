import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(route: import('@angular/router').ActivatedRouteSnapshot): boolean {
    const user = localStorage.getItem('user');


    if (user && (route.routeConfig?.path === 'login' || route.routeConfig?.path === 'register')) {
      this.router.navigate(['/admin/home']);
      return false;
    }


    if (route.routeConfig?.path === 'admin' && !user) {
      this.router.navigate(['/login']);
      return false;
    }

    return true;
  }
}
