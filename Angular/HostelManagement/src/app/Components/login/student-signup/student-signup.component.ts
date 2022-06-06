import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/model/student';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-student-signup',
  templateUrl: './student-signup.component.html',
  styleUrls: ['./student-signup.component.css']
})
export class StudentSignupComponent implements OnInit {

  name : string = '';
  username : string = '';
  password : string = '';

  user : Student = new Student();

  constructor(private authService : AuthService, private route : Router) { }

  ngOnInit(): void {
  }

  signup() {

    console.log(this.name+" "+ this.username+ " " + this.password);

    this.user.username = this.username;
    this.user.password = this.password;
    this.user.name = this.name;

    this.authService.signup(this.user).subscribe(res => {
      if(res == null) {
        alert("Registration failed");
        this.ngOnInit();
      }else {
        console.log("Registration successful");
        alert("Registration successful");
        this.route.navigate(['/studentDashboard']);
      }
    }, err => {
      alert("Registration failed.");
      this.ngOnInit();
    })

  }

}
