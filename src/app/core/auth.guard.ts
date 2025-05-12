import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(route: import('@angular/router').ActivatedRouteSnapshot): boolean {
    const token = localStorage.getItem('token');

    // إذا كان هناك توكن، يمنع الوصول إلى صفحات تسجيل الدخول والتسجيل
    if (token && (route.routeConfig?.path === 'login' || route.routeConfig?.path === 'register')) {
      this.router.navigate(['/home']); // إعادة توجيه إلى صفحة home
      return false;
    }

    // إذا لم يكن هناك توكن، يسمح بالوصول إلى صفحة home
    if (route.routeConfig?.path === 'home' && !token) {
      this.router.navigate(['/login']); // إذا لا يوجد توكن، إعادة توجيه إلى صفحة login
      return false;
    }

    return true; // للسماح بالوصول إلى المسار في الحالات الأخرى
  }
}
