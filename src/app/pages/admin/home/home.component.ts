import { Component } from '@angular/core';
import { AuthService,Task } from '../../../shared/services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],

  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  task: Task[] = [];



NemeUser = localStorage.getItem('user')
 Name: string = '';
  ngOnInit(): void {
    const userString = localStorage.getItem('user');
    if (userString) {
      const user = JSON.parse(userString);
      this.Name = `${user.firstName} ${user.lastName}`;
    }


  }






}
