import { Component, OnInit, Inject, Injectable } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Admin } from 'src/app/model/admin';
import { AdminService } from 'src/app/service/admin.service';
import { NotificationService } from 'src/app/service/notification.service';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-admin-details',
  templateUrl: './admin-details.component.html',
  styleUrls: ['./admin-details.component.css']
})
export class AdminDetailsComponent implements OnInit {

  constructor(private route : Router, public adminService : AdminService,
    public dialogRef : MatDialogRef<AdminDetailsComponent>, public notification : NotificationService,
    @Inject(MAT_DIALOG_DATA) public data:any) { }

 ngOnInit(): void {
 }

 get f() {
  return this.adminService.form.controls
 }

 onClose() {
  this.adminService.form.enable();
   this.adminService.form.reset();
   this.adminService.initializeFormGroup();
   this.dialogRef.close();
   this.adminService.filter('');
 }

 onClear() {
   this.adminService.form.reset();
   this.adminService.initializeFormGroup();
 }

 onSubmit() {
   var adminDetails = new Admin;
   adminDetails.id = this.adminService.form.value['id'];
   adminDetails.name = this.adminService.form.value['name'];
   adminDetails.gender = this.adminService.form.value['gender'];
   adminDetails.dateOfBirth = this.adminService.form.value['dateOfBirth'];
   adminDetails.age = this.adminService.form.value['age'];
   adminDetails.bloodGrp = this.adminService.form.value['bloodGrp'];

   adminDetails.adminId = this.adminService.form.value['adminId'];
   adminDetails.email = this.adminService.form.value['email'];
   adminDetails.password = this.adminService.form.value['password'];
   adminDetails.confirmPassword = this.adminService.form.value['confirmPassword'];
   adminDetails.phoneNo = this.adminService.form.value['phoneNo'];

   adminDetails.status = this.adminService.form.value['status'];

   adminDetails.street = this.adminService.form.value['street'];
   adminDetails.city = this.adminService.form.value['city'];
   adminDetails.district = this.adminService.form.value['district'];
   adminDetails.state = this.adminService.form.value['state'];
   adminDetails.pincode = this.adminService.form.value['pincode'];

   adminDetails.verify = this.adminService.form.value['verify'];

   console.log(adminDetails);


   this.adminService.updateAdmin(adminDetails).subscribe(
     data => {
       this.adminService.form.reset();
       this.adminService.initializeFormGroup();
       this.notification.success("Submitted Successfully")
       this.onClose();
     }
   )
 }

 logout() {
   localStorage.removeItem("token");
   this.route.navigate(['/staffLogin']);
 }

}
