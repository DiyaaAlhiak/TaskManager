import { Component, OnInit } from '@angular/core';
import { AuthService, Task, User } from '../../../../shared/services/auth.service';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.scss'
})
export class AddTaskComponent implements OnInit {

  taskForm!: FormGroup;
  Users: User[] = [];
 adminId: string | null = null;  // بدل number

  constructor(private _AuthService: AuthService, private fb: FormBuilder) {}

  ngOnInit(): void {
const userData = localStorage.getItem('user');
const user = userData ? JSON.parse(userData) : null;
 if (user && user.role === 'admin') {
  this.adminId = user.id;  // هذا هو الـ UUID
}

    this.initForm();  // بناء الفورم
    this.getEmployeesName();  // جلب الموظفين
    this.valueChanges()
  }

  initForm() {
    this.taskForm = this.fb.group({
      EmployeeName: ['', Validators.required],
      NameTask: ['', Validators.required],
      TaskType: ['', Validators.required],
      time: ['', Validators.required],
      description: ['', Validators.required],
      activation: [false],
      userId: [''],
      createdBy: [this.adminId]
    });
  }


valueChanges(){
  this.taskForm.get('EmployeeName')?.valueChanges.subscribe(selectedName => {
  const selectedUser = this.Users.find(user => user.lastName === selectedName);
  if (selectedUser) {
    this.taskForm.patchValue({ userId: selectedUser.id });
  }
});
}


  getEmployeesName() {
    const api = 'http://localhost:3000/addUser';
    this._AuthService.getEmployees(api).subscribe(res => {
      this.Users = res.filter(user => user.role === 'user');
    });
  }

  submitTask(): void {
    const apiUrl = 'http://localhost:3000/employees';

    if (this.taskForm.valid) {
      this._AuthService.addTask(apiUrl, this.taskForm.value).subscribe(
        res => {
          console.log('✅ تمت إضافة المهمة بنجاح:', res);
          this.taskForm.reset();
        },
        err => {
          console.error('❌ حدث خطأ أثناء إضافة المهمة:', err);
        }
      );
    }
  }
}
