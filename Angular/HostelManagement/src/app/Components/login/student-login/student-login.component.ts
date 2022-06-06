import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { Student } from 'src/app/model/student';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-student-login',
  templateUrl: './student-login.component.html',
  styleUrls: ['./student-login.component.css']
})
export class StudentLoginComponent implements OnInit {

  username : string = '';
  password : string = '';

  user : Student = new Student();

  // login = new FormGroup({
  //   name: new FormControl("subiar",[Validators.required]),
  //   password: new FormControl(Validators.pattern("^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$")),
  // });

  constructor(private authService : AuthService, private route : Router) { }

  ngOnInit(): void {
    this.username = '';
    this.password = '';
  }

  login() {

    console.log(this.username+ " " + this.password);

    this.user.username = this.username;
    this.user.password = this.password;


    this.authService.login(this.user).subscribe(res => {

      if(res == null) {
        alert("Uername or password is wrong");
        this.ngOnInit();
      }else {
        console.log("Login successful");
        localStorage.setItem("token",res.token);
        this.route.navigate(['/studentDashboard'])
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
