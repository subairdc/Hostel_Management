import { Component, OnInit } from '@angular/core';
import { Staff } from 'src/app/model/staff';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-staff-signup',
  templateUrl: './staff-signup.component.html',
  styleUrls: ['./staff-signup.component.css']
})
export class StaffSignupComponent implements OnInit {

  name : string = '';
  username : string = '';
  password : string = '';

  user : Staff = new Staff();

  constructor(private authService : AuthService, private route : Router) { }

  ngOnInit(): void {
  }

  signup() {

    console.log(this.name+" "+ this.username+ " " + this.password);

    this.user.username = this.username;
    this.user.password = this.password;
    this.user.name = this.name;
    this.user.role = 'user';

    this.authService.signUp(this.user).subscribe(res => {
      if(res == null) {
        alert("Registration failed");
        this.ngOnInit();
      }else {
        console.log("Registration successful");
        alert("Registration successful");
        this.route.navigate(['/']);
      }
    }, err => {
      alert("Registration failed.");
      this.ngOnInit();
    })

  }

}
