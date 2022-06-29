import { Component, OnInit } from '@angular/core';
import { Staff } from 'src/app/model/staff';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { FormGroup,FormControl, Validators, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-staff-signup',
  templateUrl: './staff-signup.component.html',
  styleUrls: ['./staff-signup.component.css']
})
export class StaffSignupComponent implements OnInit {

  signupForm !: FormGroup;

  submitted = false;

  name : string = '';
  email : string = '';
  password : string = '';

  user : Staff = new Staff();

  constructor(private authService : AuthService, private route : Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      name : ['',[Validators.required,Validators.minLength(4)]],
      email : ['',[Validators.required,Validators.email]],
      password : ['',[Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{7,}')]]
    })
  }

  get f(){
    return this.signupForm.controls;
  }

  signup() {

    console.log(this.name+" "+ this.email+ " " + this.password);
    this.submitted = true;

    if (this.signupForm.invalid) {
      return;
    }

    this.user.email = this.email;
    this.user.password = this.password;
    this.user.name = this.name;
    // this.user.role = 'user';

    this.authService.staffSignup(this.user).subscribe(res => {
      if(res == null) {
        alert("Registration failed");
        this.ngOnInit();
      }else {
        console.log("Registration successful");
        alert("Registration successful");
        this.route.navigate(['/staffLogin']);
      }
    }, err => {
      alert("Registration failed.");
      this.ngOnInit();
    })

  }

}
