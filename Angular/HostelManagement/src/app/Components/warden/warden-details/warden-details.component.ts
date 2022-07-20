import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Warden } from 'src/app/model/warden';
import { NotificationService } from 'src/app/service/notification.service';
import { WardenService } from 'src/app/service/warden.service';

@Component({
  selector: 'app-warden-details',
  templateUrl: './warden-details.component.html',
  styleUrls: ['./warden-details.component.css']
})
export class WardenDetailsComponent implements OnInit {

  constructor(private route : Router, public wardenService : WardenService,
    public dialogRef : MatDialogRef<WardenDetailsComponent>, public notification : NotificationService,
    @Inject(MAT_DIALOG_DATA) public data:any) { }

 ngOnInit(): void {
 }

 onClose() {
   this.wardenService.form.reset();
   this.wardenService.initializeFormGroup();
   this.dialogRef.close();
   this.wardenService.filter('');
 }

 onClear() {
   this.wardenService.form.reset();
   this.wardenService.initializeFormGroup();
 }

 onSubmit() {
   var wardenDetails = new Warden;
   wardenDetails.id = this.wardenService.form.value['id'];
   wardenDetails.name = this.wardenService.form.value['name'];
   wardenDetails.email = this.wardenService.form.value['email'];
   wardenDetails.password = this.wardenService.form.value['password'];
   wardenDetails.orderNo = this.wardenService.form.value['orderNo'];

   this.wardenService.updateWarden(wardenDetails).subscribe(
     data => {
       this.wardenService.form.reset();
       this.wardenService.initializeFormGroup();
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
