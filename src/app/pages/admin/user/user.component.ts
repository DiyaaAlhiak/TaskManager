import { Component } from '@angular/core';
import { AuthService, Task } from '../../../shared/services/auth.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
task:Task[]=[]
Role = ''
  constructor(private _AuthService: AuthService) {}

  ngOnInit(): void {
this.getRole()
this.getTask()
  }

getTask(){
 const api ='http://localhost:3000/employees'
 this._AuthService.getAllTasks(api).subscribe(res =>{
  this.task = res

 })
}
getRole(){
    const userString = localStorage.getItem('user');
    if (userString) {
      const user = JSON.parse(userString);
      this.Role = `${user.role}`;
    }


}
}
