import { Component } from '@angular/core';
import { AuthService, Task } from '../../../shared/services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  task: Task[] = [];
  ID: string = '';
  Role: string = '';

  constructor(private _AuthService: AuthService) {}

  ngOnInit(): void {
    const userString = localStorage.getItem('user');
    if (userString) {
      const user = JSON.parse(userString);
      this.Role = user.role;
      this.ID = user.id;

      // ✅ بعد تحميل بيانات المستخدم
      this.getAllUsers(this.ID);
    }
  }

  getAllUsers(id: string): void {
    this._AuthService.getTask(id).subscribe(res => {
      this.task = res;
      console.log(this.task);
    });
  }
}
