import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../../shared-ui/navbar/navbar.component';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [RouterOutlet,NavbarComponent,AdminComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent {

}
