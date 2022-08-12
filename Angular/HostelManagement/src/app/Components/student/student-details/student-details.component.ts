import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Staff } from 'src/app/model/staff';
import { Student } from 'src/app/model/student';
import { NotificationService } from 'src/app/service/notification.service';
import { StudentService } from 'src/app/service/student.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {

  constructor(private route : Router, public studentService : StudentService,
    public dialogRef : MatDialogRef<StudentDetailsComponent>, public notification : NotificationService,
    @Inject(MAT_DIALOG_DATA) public data:any) { }

 ngOnInit(): void {
 }

 onClose() {
   this.studentService.form.reset();
   this.studentService.initializeFormGroup();
   this.dialogRef.close();
   this.studentService.filter('');
 }

 onClear() {
   this.studentService.form.reset();
   this.studentService.initializeFormGroup();
 }

 get f(){
  return this.studentService.form.controls;
}
 onSubmit() {
   var studentDetails = new Student;
   studentDetails.id = this.studentService.form.value['id'];
   studentDetails.name = this.studentService.form.value['name'];
   studentDetails.email = this.studentService.form.value['email'];
   studentDetails.password = this.studentService.form.value['password'];

   this.studentService.updateStudent(studentDetails).subscribe(
     data => {
       this.studentService.form.reset();
       this.studentService.initializeFormGroup();
       this.notification.success("Submitted Successfully")
       this.onClose();
     }
   )
 }

 logout() {
   localStorage.removeItem("token");
   this.route.navigate(['/studentLogin']);
 }

}
