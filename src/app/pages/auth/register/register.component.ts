import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../../shared/services/auth.service';
import { CommonModule } from '@angular/common';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  registerForm: FormGroup;
  submitted = false;
  errorMessage = '';
  successMessage = '';
  fadeOut = false;

  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) {
    this.registerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobileNumber: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern('^[0-9]*$')]],
      password: ['', Validators.required],
      role: ['', Validators.required]
    });
  }

  onSubmit() {
    const  api ='http://localhost:3000/addUser'
    this.submitted = true;
    if (this.registerForm.invalid) return;

    const newUser = {
      ...this.registerForm.value,
      id: uuidv4(),
      token: uuidv4()
    };

    this.authService.registerUser(newUser, api).subscribe({

      next: () => {
        this.successMessage = 'تم إنشاء الحساب بنجاح';
        this.errorMessage = '';

        setTimeout(() => {
          this.successMessage = '';
          this.router.navigate(['/login']);
        }, 3000);
      },
      error: () => {
        this.errorMessage = 'حدث خطأ أثناء إنشاء الحساب';
        this.successMessage = '';

        setTimeout(() => {
          this.errorMessage = '';
        }, 5000);
      }
    });
  }
}
