import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Student } from 'src/app/model/student';
import { NotificationService } from 'src/app/service/notification.service';
import { StudentService } from 'src/app/service/student.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {

  user : Student = new Student();
  studentDetails = new Student;

  constructor(private route : Router,private formBuilder : FormBuilder, public studentService : StudentService,
    public dialogRef : MatDialogRef<StudentDetailsComponent>, public notification : NotificationService,
    @Inject(MAT_DIALOG_DATA) public data:any) {

  }

 ngOnInit(): void {
 }

 get f() {
    return this.studentService.form.controls;
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

 onSubmit() {
   var studentDetails = new Student;
   studentDetails.id = this.studentService.form.value['id'];
   studentDetails.name = this.studentService.form.value['name'];
   studentDetails.gender = this.studentService.form.value['gender'];
   studentDetails.dateOfBirth = this.studentService.form.value['dateOfBirth'];
   studentDetails.age = this.studentService.form.value['age'];
   studentDetails.bloodGrp = this.studentService.form.value['bloodGrp'];

   studentDetails.regNo = this.studentService.form.value['regNo'];
   studentDetails.email = this.studentService.form.value['email'];
   studentDetails.password = this.studentService.form.value['password'];
   studentDetails.confirmPassword = this.studentService.form.value['confirmPassword'];
   studentDetails.phoneNo = this.studentService.form.value['phoneNo'];

   studentDetails.degree = this.studentService.form.value['degree'];
   studentDetails.dept = this.studentService.form.value['dept'];
   studentDetails.year = this.studentService.form.value['year'];
   studentDetails.sem = this.studentService.form.value['sem'];

   studentDetails.status = this.studentService.form.value['status'];
   studentDetails.hostel = this.studentService.form.value['hostel'];
   studentDetails.roomNo = this.studentService.form.value['roomNo'];

   studentDetails.street = this.studentService.form.value['street'];
   studentDetails.city = this.studentService.form.value['city'];
   studentDetails.district = this.studentService.form.value['district'];
   studentDetails.state = this.studentService.form.value['state'];
   studentDetails.pincode = this.studentService.form.value['pincode'];

   studentDetails.fatherName = this.studentService.form.value['fatherName'];
   studentDetails.fatherPhoneNo = this.studentService.form.value['fatherPhoneNo'];
   studentDetails.motherName = this.studentService.form.value['motherName'];
   studentDetails.motherPhoneNo = this.studentService.form.value['motherPhoneNo'];

   studentDetails.guardianName = this.studentService.form.value['guardianName'];
   studentDetails.guardianPhoneNo = this.studentService.form.value['guardianPhoneNo'];
   studentDetails.guardianRelation = this.studentService.form.value['guardianRelation'];
   studentDetails.guardianAddress = this.studentService.form.value['guardianAddress'];

   console.log(studentDetails);

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
