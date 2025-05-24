import { Component } from '@angular/core';
import { AuthService,Task,User } from '../../../shared/services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
Tasks: Task[] = [];
constructor(private _AuthService: AuthService){}



  ngOnInit(): void {
    this.getAllUsers(1);
  }

  getAllUsers(id: number): void {
    this._AuthService.getTaskUser(id).subscribe(users => {
      this.Tasks = users;
      console.log(this.Tasks)
    });
  }


}
