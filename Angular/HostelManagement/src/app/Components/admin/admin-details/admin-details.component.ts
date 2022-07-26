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

 onClose() {
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
   adminDetails.email = this.adminService.form.value['email'];
   adminDetails.password = this.adminService.form.value['password'];

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
