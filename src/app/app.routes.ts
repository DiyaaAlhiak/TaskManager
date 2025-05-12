import { Routes } from '@angular/router';
import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { HomeComponent } from './pages/admin/home/home.component';
import { AuthGuard } from './core/auth.guard';


export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent,    canActivate: [AuthGuard]},
  {path:'register', component:RegisterComponent,  canActivate: [AuthGuard]},
  // {path:"home", component:HomeComponent}
  { path: 'home', component: HomeComponent,  canActivate: [AuthGuard] }

];
