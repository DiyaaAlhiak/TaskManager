import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
fadeOut = false;



constructor(private fb: FormBuilder, private router: Router) {
  this.loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required ]
  });
}




onSubmit() {
  this.submitted = true;

    if (this.loginForm.invalid) return;

    const { email, password } = this.loginForm.value;

    if (email === 'admin@example.com' && password === '123456') {
      localStorage.setItem('userRole', 'admin');
      this.router.navigate(['/dashboard']);
    } else {
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

}
}
