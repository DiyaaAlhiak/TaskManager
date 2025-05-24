import { Component } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

constructor(private _auth:AuthService ,private router: Router ){

}

logout(): void {
  localStorage.clear(); // يمسح كل البيانات من localStorage
  sessionStorage.clear(); // إن وجدت بيانات في الجلسة
  this.router.navigate(['/login']);
}

}
