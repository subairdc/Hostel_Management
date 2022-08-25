import { Component, OnInit } from '@angular/core';
import { Staff } from 'src/app/model/staff';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { FormGroup,FormControl, Validators, FormBuilder } from '@angular/forms';
import { NotificationService } from 'src/app/service/notification.service';
import { StaffService } from 'src/app/service/staff.service';


@Component({
  selector: 'app-staff-signup',
  templateUrl: './staff-signup.component.html',
  styleUrls: ['./staff-signup.component.css']
})
export class StaffSignupComponent implements OnInit {

  signupForm !: FormGroup;

  submitted = false;

  gender=["Select Gender","Male","Female","Others"];
  genderS : string ="Select Gender";

  bloodGrp = ["Select Blood Group","A+","A-","B+","B-","AB+","AB-","O+","O-","A1B+","A1B-","A2+","A2-","Others"];
  bloodGrpS : string = "Select Blood Group";

  hostel = ["Select Hostel","Pothigai Boys Hostel","Thamirabharani Girls Hostel"]
  hostelS : string = "Select Hostel";

  user : Staff = new Staff();

  constructor(private authService : AuthService, private route : Router, private formBuilder : FormBuilder,
    public notification : NotificationService,public staffService : StaffService) {

  }

  ngOnInit(): void {
  }

  get f(){
    return this.staffService.form.controls;
  }

  signup() {

    this.user.name = this.staffService.form.value['name'];
    this.user.gender = this.staffService.form.value['gender'];
    this.user.dateOfBirth = this.staffService.form.value['dateOfBirth'];
    this.user.age = this.staffService.form.value['age'];
    this.user.bloodGrp = this.staffService.form.value['bloodGrp'];


    this.user.staffId = this.staffService.form.value['staffId'];
    this.user.phoneNo = this.staffService.form.value['phoneNo'];
    this.user.email = this.staffService.form.value['email'];
    this.user.password = this.staffService.form.value['password'];
    this.user.confirmPassword = this.staffService.form.value['confirmPassword'];

    this.user.status = this.staffService.form.value['status'];
    this.user.hostel = this.staffService.form.value['hostel'];

    this.user.street = this.staffService.form.value['street'];
    this.user.city = this.staffService.form.value['city'];
    this.user.district = this.staffService.form.value['district'];
    this.user.state = this.staffService.form.value['state'];
    this.user.pincode = this.staffService.form.value['pincode'];


    this.authService.staffSignup(this.user).subscribe(res => {
      if(res == null) {
        alert("User Already Exist(Email)");
        this.ngOnInit();
      }else {
        console.log("Registration successful");
        this.staffService.form.reset();
        this.notification.success("Student Registration Successful")
        this.route.navigate(['/staffLogin']);
      }
    }, err => {
      alert("Registration failed.ERROR");
      this.ngOnInit();
    })

  }

  onCancel() {
    this.staffService.form.reset();
    this.staffService.initializeFormGroup();
  }

}
