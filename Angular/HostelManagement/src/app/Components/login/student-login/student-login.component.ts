import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators, FormBuilder } from '@angular/forms';
import { Student } from 'src/app/model/student';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-student-login',
  templateUrl: './student-login.component.html',
  styleUrls: ['./student-login.component.css']
})
export class StudentLoginComponent implements OnInit {

  loginForm!: FormGroup;
  id : number=0;
  email : string = '';
  password : string = '';

  user : Student = new Student();

  // login = new FormGroup({
  //   name: new FormControl("subiar",[Validators.required]),
  //   password: new FormControl(Validators.pattern("^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$")),
  // });

  constructor(private authService : AuthService, private route : Router, private formBuilder: FormBuilder) {

  this.loginForm = this.formBuilder.group({
    email :['',[Validators.required, Validators.email]],
    password: ['',[Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{7,}')]]
  });
  }

  get f(){
    return this.loginForm.controls;
  }

  ngOnInit(): void {
    this.email = '';
    this.password = '';
  }

  onLogin() {

    console.log(this.email+ " " + this.password);
    this.user.email = this.email;
    this.user.password = this.password;


    this.authService.studentLogin(this.user).subscribe(res => {

      if(res == null) {
        alert("email or password is wrong or your id not verified");
        this.loginForm.reset();
        //this.ngOnInit();
      }else {
        console.log("Login successful");
        this.user.id = res.id;
        this.route.navigate(['studentHomepage/'+this.user.id +'/studentDashboard',this.user.id])
      }

    }, err => {
      alert("Login failed");
      this.ngOnInit();
    })

  }





  // getData(){
  //   console.log(this.login.value);
  // }

  // //Validation
  // get name(){
  //   return this.login.get("name");
  // }

  // get password(){
  //   return this.login.get("password");
  // }
}
