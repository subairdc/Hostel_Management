import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from 'src/app/model/admin';
import { AuthService } from 'src/app/service/auth.service';
import { FormGroup,FormControl, Validators, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-admin-signup',
  templateUrl: './admin-signup.component.html',
  styleUrls: ['./admin-signup.component.css']
})
export class AdminSignupComponent implements OnInit {

  signupForm!: FormGroup;

  name : string = '';
  email : string = '';
  password : string = '';

  user : Admin = new Admin();

  constructor(private authService : AuthService, private route : Router, private formBuilder : FormBuilder) {

    this.signupForm = this.formBuilder.group({
      name : ['',[Validators.required,Validators.minLength(4)]],
      email : ['',[Validators.required,Validators.email]],
      password : ['',[Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{7,}')]]
    })
  }

  get f(){
    return this.signupForm.controls;
  }

  ngOnInit(): void {
  }

  signup() {

    console.log(this.name+" "+ this.email+ " " + this.password);

    this.user.email = this.email;
    this.user.password = this.password;
    this.user.name = this.name;
    // this.user.role = 'user';

    this.authService.adminSignup(this.user).subscribe(res => {
      if(res == null) {
        alert("Registration failed");
        this.ngOnInit();
      }else {
        console.log("Registration successful");
        alert("Registration successful");
        this.route.navigate(['/adminLogin']);
      }
    }, err => {
      alert("Registration failed.");
      this.ngOnInit();
    })

  }

}
