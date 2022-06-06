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

  username : string = '';
  password : string = '';

  user : Admin = new Admin();

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
        this.route.navigate(['/adminDashboard'])

      }

    }, err => {
      alert("Login failed");
      this.ngOnInit();
    })

  }

}
