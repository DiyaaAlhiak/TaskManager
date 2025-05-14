import { Component } from '@angular/core';
import { AuthService,User } from '../../../shared/services/auth.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
users: User[] = [];
constructor(private _AuthService: AuthService){}



  ngOnInit(): void {
    this.getAllUsers(1);
  }

  getAllUsers(id: number): void {
    this._AuthService.getUsers(id).subscribe(users => {
      this.users = users;
    });
  }


}
