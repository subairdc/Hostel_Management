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

  constructor(private route : Router, public staffService : StaffService,
    public dialogRef : MatDialogRef<StaffDetailsComponent>, public notification : NotificationService,
    @Inject(MAT_DIALOG_DATA) public data:any) { }

 ngOnInit(): void {
 }

 onClose() {
   this.staffService.staffForm.reset();
   this.staffService.initializeFormGroup();
   this.dialogRef.close();
   this.staffService.filter('');
 }

 onClear() {
   this.staffService.staffForm.reset();
   this.staffService.initializeFormGroup();
 }

 onSubmit() {
   var staffDetails = new Staff;
   staffDetails.id = this.staffService.staffForm.value['id'];
   staffDetails.name = this.staffService.staffForm.value['name'];
   staffDetails.email = this.staffService.staffForm.value['email'];
   staffDetails.password = this.staffService.staffForm.value['password'];

   this.staffService.updateStaff(staffDetails).subscribe(
     data => {
       this.staffService.staffForm.reset();
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
