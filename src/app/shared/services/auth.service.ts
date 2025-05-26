import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  mobileNumber: number;
  password: string;
  role: string;
  token: string;
}

export interface Task {
  id: number;
  userId: number;
  EmployeeName: string;
  NameTask: string;
  condition:string,
  time:string
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {
// private apiUrl = 'http://localhost:3000/Admin';
// private apiData = 'http://localhost:3000/employees?id='
  constructor(private http:HttpClient,private router: Router ) { }


login( api: string,email: string, password: string ) {
  return this.http.get<any[]>(`${api}?email=${email}&password=${password}`).pipe(
    map(users => users.length ? users[0] : null)
  );
}

 logout(): void {
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }

  // اختياري: التحقق مما إذا كان المستخدم مسجلاً الدخول
  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }


  registerUser(userData: any , api:string) {
    return this.http.post(api, userData);
  }
// getTask(id: number): Observable<Task[]> {
//   return this.http.get<Task[]>(`${this.apiData}${id}`);
// }


}
