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
   this.studentService.studentForm.reset();
   this.studentService.initializeFormGroup();
   this.dialogRef.close();
   this.studentService.filter('');
 }

 onClear() {
   this.studentService.studentForm.reset();
   this.studentService.initializeFormGroup();
 }

 onSubmit() {
   var studentDetails = new Student;
   studentDetails.id = this.studentService.studentForm.value['id'];
   studentDetails.name = this.studentService.studentForm.value['name'];
   studentDetails.email = this.studentService.studentForm.value['email'];
   studentDetails.password = this.studentService.studentForm.value['password'];

   this.studentService.updateStudent(studentDetails).subscribe(
     data => {
       this.studentService.studentForm.reset();
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
