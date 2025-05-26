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
constructor(private _AuthService: AuthService){}
 Role:string = '';
  ngOnInit(): void {
    // this.getAllUsers(1);
 const userString = localStorage.getItem('user');
    if (userString) {
      const user = JSON.parse(userString);
         this.Role = `${user.role}`;
  }
  }


  // getAllUsers(id: number): void {
  //   this._AuthService.getTask(id).subscribe(res => {
  //     this.task = res;
  //     console.log(this.task)
  //   });
  // }
}
