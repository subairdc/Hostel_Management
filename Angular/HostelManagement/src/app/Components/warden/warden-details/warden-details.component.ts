import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
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

  id : number=0;
  user : Warden = new Warden();

  constructor(private router : Router, private route: ActivatedRoute, public wardenService : WardenService,
    public dialogRef : MatDialogRef<WardenDetailsComponent>, public notification : NotificationService,
    @Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getWarden();
  }

  private getWarden() {
    this.wardenService.getWardenById(this.id).subscribe(data => {
      this.user = data;
      console.log(this.user.name);
    //this.wardenService.form.value['name'] = this.user.name;
    console.log(this.wardenService.form.value['name']);
    console.log(this.user.name);
    })
  }

  get f(){
    return this.wardenService.form.controls;
  }

 onClose() {
  this.wardenService.form.enable();
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
   wardenDetails.gender = this.wardenService.form.value['gender'];
   wardenDetails.dateOfBirth = this.wardenService.form.value['dateOfBirth'];
   wardenDetails.age = this.wardenService.form.value['age'];
   wardenDetails.bloodGrp = this.wardenService.form.value['bloodGrp'];

   wardenDetails.wardenId = this.wardenService.form.value['wardenId'];
   wardenDetails.email = this.wardenService.form.value['email'];
   wardenDetails.password = this.wardenService.form.value['password'];
   wardenDetails.confirmPassword = this.wardenService.form.value['confirmPassword'];
   wardenDetails.phoneNo = this.wardenService.form.value['phoneNo'];

   wardenDetails.status = this.wardenService.form.value['status'];
   wardenDetails.hostel = this.wardenService.form.value['hostel'];

   wardenDetails.street = this.wardenService.form.value['street'];
   wardenDetails.city = this.wardenService.form.value['city'];
   wardenDetails.district = this.wardenService.form.value['district'];
   wardenDetails.state = this.wardenService.form.value['state'];
   wardenDetails.pincode = this.wardenService.form.value['pincode'];

   wardenDetails.verify = this.wardenService.form.value['verify'];

   console.log(wardenDetails);
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
   this.router.navigate(['/staffLogin']);
 }

}
