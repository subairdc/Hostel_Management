import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from 'src/app/model/admin';
import { AuthService } from 'src/app/service/auth.service';
import { FormGroup,FormControl, Validators, FormBuilder } from '@angular/forms';
import { NotificationService } from 'src/app/service/notification.service';
import { AdminService } from 'src/app/service/admin.service';


@Component({
  selector: 'app-admin-signup',
  templateUrl: './admin-signup.component.html',
  styleUrls: ['./admin-signup.component.css']
})
export class AdminSignupComponent implements OnInit {

  user : Admin = new Admin();

  gender=["Select Gender","Male","Female","Others"];
  genderS : string ="Select Gender";

  bloodGrp = ["Select Blood Group","A+","A-","B+","B-","AB+","AB-","O+","O-","A1B+","A1B-","A2+","A2-","Others"];
  bloodGrpS : string = "Select Blood Group";


  constructor(private authService : AuthService, private route : Router, private formBuilder : FormBuilder,
    public notification : NotificationService,public adminService : AdminService) {

  }

  ngOnInit(): void {
  }

  get f(){
    return this.adminService.form.controls;
  }

  onClear() {
    this.adminService.form.reset();
    this.adminService.initializeFormGroup();
  }

  signup() {

    this.user.name = this.adminService.form.value['name'];
    this.user.gender = this.adminService.form.value['gender'];
    this.user.dateOfBirth = this.adminService.form.value['dateOfBirth'];
    this.user.age = this.adminService.form.value['age'];
    this.user.bloodGrp = this.adminService.form.value['bloodGrp'];


    this.user.adminId = this.adminService.form.value['adminId'];
    this.user.phoneNo = this.adminService.form.value['phoneNo'];
    this.user.email = this.adminService.form.value['email'];
    this.user.password = this.adminService.form.value['password'];
    this.user.confirmPassword = this.adminService.form.value['confirmPassword'];

    this.user.status = this.adminService.form.value['status'];

    this.user.street = this.adminService.form.value['street'];
    this.user.city = this.adminService.form.value['city'];
    this.user.district = this.adminService.form.value['district'];
    this.user.state = this.adminService.form.value['state'];
    this.user.pincode = this.adminService.form.value['pincode'];

    // this.user.dateOfEnrollment =
    // this.user.role = 'user';

    this.authService.adminSignup(this.user).subscribe(res => {
      if(res == null) {
        alert("User Already Exist(Email)");
        this.ngOnInit();
      }else {
        console.log("Registration successful");
        this.adminService.form.reset();
        this.notification.success("Student Registration Successful");
        this.route.navigate(['/adminLogin']);
      }
    }, err => {
      alert("Registration failed.");
      this.ngOnInit();
    })

  }

  onCancel() {
    this.adminService.form.reset();
    this.adminService.initializeFormGroup();
  }

}
