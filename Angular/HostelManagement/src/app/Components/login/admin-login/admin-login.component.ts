import { Component, OnInit } from '@angular/core';
import { Admin } from 'src/app/model/admin';
import { AuthService } from 'src/app/service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  email : string = '';
  password : string = '';

  user : Admin = new Admin();

  constructor(private authService : AuthService, private route : Router) { }

  ngOnInit(): void {
    this.email = '';
    this.password = '';
  }

  login() {

    console.log(this.email+ " " + this.password);

    this.user.email = this.email;
    this.user.password = this.password;

    this.authService.adminLogin(this.user).subscribe(res => {

      if(res == null) {
        alert("email or password is wrong");
        this.ngOnInit();
      }else {
        console.log("Login successful");
        this.route.navigate(['/adminHomepage'])

      }

    }, err => {
      alert("Login failed");
      this.ngOnInit();
    })

  }

}
