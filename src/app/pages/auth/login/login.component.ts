import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
<<<<<<< HEAD
import { Router } from '@angular/router';
=======
import { Router, RouterModule } from '@angular/router';
>>>>>>> b713a6c (test)
import { AuthService } from '../../../shared/services/auth.service';
@Component({
  selector: 'app-login',
  standalone: true,
<<<<<<< HEAD
  imports: [CommonModule, ReactiveFormsModule],
=======
  imports: [CommonModule, ReactiveFormsModule ,RouterModule ],
>>>>>>> b713a6c (test)
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




<<<<<<< HEAD
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
=======
>>>>>>> b713a6c (test)


onSubmit() {
  this.submitted = true;
  if (this.loginForm.invalid) return;

  const { email, password } = this.loginForm.value;

  this.authService.login(email!, password!).subscribe(user => {
    if (user) {
      localStorage.setItem('userRole', user.role);
<<<<<<< HEAD
      this.router.navigate(['/dashboard']);
=======
      this.router.navigate(['/home'])
>>>>>>> b713a6c (test)
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
