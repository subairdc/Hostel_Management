import { Component, OnInit } from '@angular/core';
import { Staff } from 'src/app/model/staff';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-staff-login',
  templateUrl: './staff-login.component.html',
  styleUrls: ['./staff-login.component.css']
})
export class StaffLoginComponent implements OnInit {

  username : string = '';
  password : string = '';
  role : string = '';

  user : Staff = new Staff();

  roles : string[];

  constructor(private authService : AuthService, private route : Router) {
    this.roles = [
      'admin',
      'user'
    ]
  }

  ngOnInit(): void {
    this.username = '';
    this.password = '';
  }

  login() {

    console.log(this.username+ " " + this.password+ " " + this.role);

    this.user.username = this.username;
    this.user.password = this.password;
    this.user.role = this.role;

    this.authService.login(this.user).subscribe(res => {

      if(res == null) {
        alert("Uername or password is wrong");
        this.ngOnInit();
      }else {
        console.log("Login successful");
        localStorage.setItem("token",res.token);

        if(this.role == 'user') {
          this.route.navigate(['/staffDashboard']);
        }

        if( this.role == 'admin') {
          this.route.navigate(['/adminDashboard']);
        }

      }

    }, err => {
      alert("Login failed");
      this.ngOnInit();
    })

  }

}
