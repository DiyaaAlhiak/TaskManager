import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../shared/services/auth.service';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
loginForm:FormGroup;
submitted = false;
errorMessage = '';
ScssMessage= '';
fadeOut = false;



constructor(private fb: FormBuilder, private router: Router ,private authService: AuthService   ) {
  this.loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required ]
  });
}




// onSubmit() {
//   this.submitted = true;
//     if (this.loginForm.invalid) return;

//     const { email, password } = this.loginForm.value;

//     this.authService.login(email!, password!).subscribe(user => {
//       if (user) {
//         localStorage.setItem('userRole', user.role);
//         this.router.navigate(['/dashboard']);
//       }

//     else {
//       this.errorMessage = 'البريد الإلكتروني أو كلمة المرور غير صحيحة';
// this.fadeOut = false;

// setTimeout(() => {
//   this.fadeOut = true;
// }, 4500); // نبدأ الاختفاء قبل أن نخفي النص

// setTimeout(() => {
//   this.errorMessage = '';
//   this.fadeOut = false;
// }, 5000);
//     }

// }
// }


onSubmit() {
  this.submitted = true;
  if (this.loginForm.invalid) return;

  const { email, password } = this.loginForm.value;

  this.authService.login(email!, password!).subscribe(user => {
    if (user) {
      localStorage.setItem('userRole', user.role);
      this.router.navigate(['/dashboard']);
this.ScssMessage = 'تم تسجيل الدخول بنجاح';

setTimeout(() => {
  this.fadeOut = true;
}, 4500);

setTimeout(() => {
  this.ScssMessage = '';
 this.fadeOut = false;
}, 5000);


    }    else {
       this.errorMessage = 'البريد الإلكتروني أو كلمة المرور غير صحيحة';
 this.fadeOut = false;

 setTimeout(() => {
   this.fadeOut = true;
 }, 4500); // نبدأ الاختفاء قبل أن نخفي النص

 setTimeout(() => {
   this.errorMessage = '';
  this.fadeOut = false;
 }, 5000);
     }
  });
}
}
