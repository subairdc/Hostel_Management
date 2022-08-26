import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Staff } from 'src/app/model/staff';
import { NotificationService } from 'src/app/service/notification.service';
import { StaffService } from 'src/app/service/staff.service';

@Component({
  selector: 'app-staff-details',
  templateUrl: './staff-details.component.html',
  styleUrls: ['./staff-details.component.css']
})
export class StaffDetailsComponent implements OnInit {

  user : Staff = new Staff();

  constructor(private route : Router, public staffService : StaffService,
    public dialogRef : MatDialogRef<StaffDetailsComponent>, public notification : NotificationService,
    @Inject(MAT_DIALOG_DATA) public data:any) { }

 ngOnInit(): void {
 }

 get f() {
  return this.staffService.form.controls
 }

 onClose() {
  this.staffService.form.enable();
   this.staffService.form.reset();
   this.staffService.initializeFormGroup();
   this.dialogRef.close();
   this.staffService.filter('');
 }

 onClear() {
   this.staffService.form.reset();
   this.staffService.initializeFormGroup();
 }

 onSubmit() {
   var staffDetails = new Staff;
   staffDetails.id = this.staffService.form.value['id'];
   staffDetails.name = this.staffService.form.value['name'];
   staffDetails.gender = this.staffService.form.value['gender'];
   staffDetails.dateOfBirth = this.staffService.form.value['dateOfBirth'];
   staffDetails.age = this.staffService.form.value['age'];
   staffDetails.bloodGrp = this.staffService.form.value['bloodGrp'];

   staffDetails.staffId = this.staffService.form.value['staffId'];
   staffDetails.email = this.staffService.form.value['email'];
   staffDetails.password = this.staffService.form.value['password'];
   staffDetails.confirmPassword = this.staffService.form.value['confirmPassword'];
   staffDetails.phoneNo = this.staffService.form.value['phoneNo'];

   staffDetails.status = this.staffService.form.value['status'];
   staffDetails.hostel = this.staffService.form.value['hostel'];

   staffDetails.street = this.staffService.form.value['street'];
   staffDetails.city = this.staffService.form.value['city'];
   staffDetails.district = this.staffService.form.value['district'];
   staffDetails.state = this.staffService.form.value['state'];
   staffDetails.pincode = this.staffService.form.value['pincode'];

   staffDetails.verify = this.staffService.form.value['verify'];

   console.log(staffDetails);

   this.staffService.updateStaff(staffDetails).subscribe(
     data => {
       this.staffService.form.reset();
       this.staffService.initializeFormGroup();
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
