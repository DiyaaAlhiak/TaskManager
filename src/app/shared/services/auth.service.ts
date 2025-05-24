import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


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
      id: number,
      userId: number,
      EmployeeName:string,
      NameTask:string,
      condition:string,
      time:string,
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {
private apiUrl = 'http://localhost:3000/users'
private apiData = 'http://localhost:3000/tasks?id='
  constructor(private http:HttpClient ) { }


  login(email:string , password:string){
return this.http.get<any[]>(`${this.apiUrl}?email=${email}&password=${password}`).pipe(
  map(users => users.length ? users[0] : null)
)
  }

  registerUser(userData: any) {
    return this.http.post(this.apiUrl, userData);
  }
  getTaskUser(id: number): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.apiData}${id}`);
  }





}
