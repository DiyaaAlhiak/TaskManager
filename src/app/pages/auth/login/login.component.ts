import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../../shared/services/auth.service';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
loginForm:FormGroup;
submitted = false;
errorMessage = '';
ScssMessage= '';
fadeOut = false
constructor(private fb: FormBuilder, private router: Router ,private authService: AuthService   ) {
  this.loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required ]
  });
}

onSubmit() {
  const api = 'http://localhost:3000/addUser';
  this.submitted = true;

  if (this.loginForm.invalid) return;

  const { email, password } = this.loginForm.value;

  this.authService.login(api, email!, password!).subscribe(user => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
      this.ScssMessage = 'تم تسجيل الدخول بنجاح';
      this.fadeOut = false;

      // ✅ أولاً تظهر الرسالة
      setTimeout(() => {
        this.fadeOut = true;
      }, 2000); // fade out بعد ثانيتين

      // ✅ بعد 2.5 ثانية مثلاً، انتقل لصفحة الـ Admin
      setTimeout(() => {
        this.ScssMessage = '';
        this.fadeOut = false;
        this.router.navigate(['/admin/home']);
      }, 2500);
    } else {
      this.errorMessage = 'البريد الإلكتروني أو كلمة المرور غير صحيحة';
      this.fadeOut = false;

      setTimeout(() => {
        this.fadeOut = true;
      }, 4500);

      setTimeout(() => {
        this.errorMessage = '';
        this.fadeOut = false;
      }, 5000);
    }
  });
}

}
