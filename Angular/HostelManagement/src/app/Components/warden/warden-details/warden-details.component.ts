import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Warden } from 'src/app/model/warden';
import { NotificationService } from 'src/app/service/notification.service';
import { WardenService } from 'src/app/service/warden.service';
import * as _lodash from 'lodash';

@Component({
  selector: 'app-warden-details',
  templateUrl: './warden-details.component.html',
  styleUrls: ['./warden-details.component.css']
})
export class WardenDetailsComponent implements OnInit {

  imageError: any;
  isImageSaved!: boolean;
  cardImageBase64!: string;
  imageURL :string = "../../../assets/profile.png";
  orderNo: string='';
  gender!: any[];

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

 fileChangeEvent(fileInput : any) {
  this.imageError = null;
  if (fileInput.target.files && fileInput.target.files[0] ) {
    //size filter bytes
    const max_size = 109710;
    const allowed_types = ['image/png','image/jpeg'];
    const max_height = 15200;
    const max_width = 25600;

    if(fileInput.target.files[0].size > max_size) {
      this.imageError = 'Maximum size allowed is ' + max_size /1000 +'Mb';
      return false;
    }

    if(!_lodash.includes(allowed_types, fileInput.target.files[0].type )) {
      this.imageError = 'only Images are allowed in ( png | jpeg)';
      return false;
    }

    const reader = new FileReader();
    reader.onload = (e:any) => {
      const image = new Image();
      image.src = e.target.result;
      // image.onload = rs => {
      //   const img_height = rs.currentTarget[height];
      //   const img_width = rs.currentTarget['width'];

      //   console.log(img_height,img_width);

      //   if(img_height > max_height && img_width > max_width) {
      //     this.imageError = 'Maximum dimensions allowed' + max_height + '*' + max_width + 'px';
      //     return false;
      //   } else {
          const imgBase64Path = e.target.result;
          this.cardImageBase64 = imgBase64Path;
          this.isImageSaved = true;
          this.wardenService.form.controls['photoPath'].setValue(fileInput.target.files[0].name);
          this.wardenService.form.controls['photo'].setValue(this.cardImageBase64);
          return true;
      //   }
      // };
    };
    reader.readAsDataURL(fileInput.target.files[0]);
  };
  return true;
 }

 logout() {
   localStorage.removeItem("token");
   this.route.navigate(['/staffLogin']);
 }

}
