import { Component } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
// import { Router } from '@angular/router';
// import { Router } from 'express';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
 constructor(private authService: AuthService) {}
 Name: string = '';
 Role:string = '';
 ngOnInit(): void {
      const userString = localStorage.getItem('user');
    if (userString) {
      const user = JSON.parse(userString);
      this.Name = `${user.firstName} ${user.lastName}`;
         this.Role = `${user.role}`;
    }
    console.log(this.Role)
 }

    onLogout() {
    this.authService.logout();
  }
}
