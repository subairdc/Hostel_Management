import { Component, OnInit } from '@angular/core';
import { Staff } from 'src/app/model/staff';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { FormGroup,FormControl, Validators, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-staff-login',
  templateUrl: './staff-login.component.html',
  styleUrls: ['./staff-login.component.css']
})
export class StaffLoginComponent implements OnInit {

  loginForm!: FormGroup;

  email : string = '';
  password : string = '';
  // role : string = '';

  user : Staff = new Staff();

  // roles : string[];

  constructor(private authService : AuthService, private route : Router, private formBuilder: FormBuilder) {

    this.loginForm = this.formBuilder.group({
      email :['',[Validators.required, Validators.email]],
      password: ['',[Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{7,}')]]
    });

    // this.roles = [
    //   'admin',
    //   'user'
    // ]
  }

  get f(){
    return this.loginForm.controls;
  }

  ngOnInit(): void {
    this.email = '';
    this.password = '';
  }

  login() {

    console.log(this.email+ " " + this.password);

    this.user.email = this.email;
    this.user.password = this.password;
    // this.user.role = this.role;

    this.authService.staffLogin(this.user).subscribe(res => {

      if(res == null) {
        alert("email or password is wrong or your id is not verified");
        this.loginForm.reset();
        //this.ngOnInit();
      }else {
        console.log("Login successful");
        //localStorage.setItem("token",res.token);
        this.user.id = res.id;
        this.route.navigate(['/staffHomepage/'+this.user.id +'/staffDashboard',this.user.id]);

        // if(this.role == 'user') {
        //   this.route.navigate(['/staffDashboard']);
        // }

        // if( this.role == 'admin') {
        //   this.route.navigate(['/adminDashboard']);
        // }

      }

    }, err => {
      alert("Login failed");
      this.ngOnInit();
    })

  }

}
