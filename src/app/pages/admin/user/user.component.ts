import { Component, signal, TemplateRef, ViewChild } from '@angular/core';
import { AuthService, Task } from '../../../shared/services/auth.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModal, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule,
    RouterModule,
    NgbDropdownModule,],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {

 @ViewChild('confirmationModal') confirmationModal: any;


// task:Task[]=[]
task  = signal<Task[]>([])
Role = ''

errorMessage = '';
ScssMessage= '';
fadeOut = false
  constructor(private _AuthService: AuthService, private modalService: NgbModal) {}









  ngOnInit(): void {
this.getRole()
this.getTask()
  }

getTask(){
 const api ='http://localhost:3000/employees'
 this._AuthService.getAllTasks(api).subscribe(res =>{
  this.task.set(res)

 })
}
getRole(){
    const userString = localStorage.getItem('user');
    if (userString) {
      const user = JSON.parse(userString);
      this.Role = `${user.role}`;
    }


}

toggleActivation(task: any, event: any) {
    task.activation = event.target.checked;
    const api = `http://localhost:3000/employees/${task.id}`;
    this._AuthService.updateTask(api, task).subscribe((res) => {
   if(res){
      console.log(true)
   }
   else{
    console.log(false)
   }
    });
  }


DeletTask(id: string){
  const api =`http://localhost:3000/employees`
  this._AuthService.DeletTask(api,id ).subscribe(() =>{
    console.log("تم الحذف")
    //  this.task = this.task.filter(task => task.id !== id);
this.task.update(CurrentTask =>
  CurrentTask.filter(task =>  task.id !== id)
)
  })
}



isModalOpen = signal(false);

toggleModal() {
  this.isModalOpen
}

}
