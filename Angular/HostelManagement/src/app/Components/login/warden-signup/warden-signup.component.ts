import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Warden } from 'src/app/model/warden';
import { AuthService } from 'src/app/service/auth.service';
import { FormGroup,FormControl, Validators, FormBuilder } from '@angular/forms';
import { NotificationService } from 'src/app/service/notification.service';
import { WardenService } from 'src/app/service/warden.service';


@Component({
  selector: 'app-warden-signup',
  templateUrl: './warden-signup.component.html',
  styleUrls: ['./warden-signup.component.css']
})
export class WardenSignupComponent implements OnInit {

  form !: FormGroup;

  user : Warden = new Warden();

  gender=["Select Gender","Male","Female","Others"];
  genderS : string ="Select Gender";

  bloodGrp = ["Select Blood Group","A+","A-","B+","B-","AB+","AB-","O+","O-","A1B+","A1B-","A2+","A2-","Others"];
  bloodGrpS : string = "Select Blood Group";

  hostel = ["Select Hostel","Pothigai Boys Hostel","Thamirabharani Girls Hostel"]
  hostelS : string = "Select Hostel";

  constructor(private authService : AuthService, private route : Router, private formBuilder : FormBuilder,
    public notification : NotificationService,public wardenService : WardenService) {

  }

  ngOnInit(): void {
  }

  get f(){
    return this.wardenService.form.controls;
  }

  onClear() {
    this.wardenService.form.reset();
    this.wardenService.initializeFormGroup();
  }

  signup() {

    this.user.name = this.wardenService.form.value['name'];
    this.user.gender = this.wardenService.form.value['gender'];
    this.user.dateOfBirth = this.wardenService.form.value['dateOfBirth'];
    this.user.age = this.wardenService.form.value['age'];
    this.user.bloodGrp = this.wardenService.form.value['bloodGrp'];


    this.user.wardenId = this.wardenService.form.value['wardenId'];
    this.user.phoneNo = this.wardenService.form.value['phoneNo'];
    this.user.email = this.wardenService.form.value['email'];
    this.user.password = this.wardenService.form.value['password'];
    this.user.confirmPassword = this.wardenService.form.value['confirmPassword'];

    this.user.status = this.wardenService.form.value['status'];
    this.user.hostel = this.wardenService.form.value['hostel'];

    this.user.street = this.wardenService.form.value['street'];
    this.user.city = this.wardenService.form.value['city'];
    this.user.district = this.wardenService.form.value['district'];
    this.user.state = this.wardenService.form.value['state'];
    this.user.pincode = this.wardenService.form.value['pincode'];

    this.user.verify = "pending";
    // this.user.dateOfEnrollment =
    // this.user.role = 'user';


    this.authService.wardenSignup(this.user).subscribe(res => {
      if(res == null) {
        alert("User Already Exist");
        this.ngOnInit();
      }else {
        console.log("Registration successful");
        this.wardenService.form.reset();
        this.notification.success("Registration Successful")
        this.route.navigate(['/wardenLogin']);
      }
    }, err => {
      alert("Registration failed.");
      this.ngOnInit();
    })

  }

}
