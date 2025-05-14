import { Routes } from '@angular/router';
import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './pages/auth/register/register.component';
// import { HomeComponent } from './pages/admin/home/home.component';
import { AuthGuard } from './core/auth.guard';
import { AdminComponent } from './pages/admin/admin.component';
import { HomeComponent } from './pages/admin/home/home.component';


export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent,    canActivate: [AuthGuard]},
  {path:'register', component:RegisterComponent,  canActivate: [AuthGuard]},
  // {path:"home", component:HomeComponent}
  {
     path: 'admin',
     canActivate: [AuthGuard],
     component:AdminComponent,
     children:[
      {
        path:"home",
        component:HomeComponent
      }
     ]
    },


];
