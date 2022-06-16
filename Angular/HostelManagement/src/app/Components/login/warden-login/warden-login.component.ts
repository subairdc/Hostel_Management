import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Warden } from 'src/app/model/warden';
import { AuthService } from 'src/app/service/auth.service';


@Component({
  selector: 'app-warden-login',
  templateUrl: './warden-login.component.html',
  styleUrls: ['./warden-login.component.css']
})
export class WardenLoginComponent implements OnInit {


  email : string = '';
  password : string = '';

  user : Warden = new Warden();


  constructor(private authService : AuthService, private route : Router) { }

  ngOnInit(): void {
    this.email = '';
    this.password = '';
  }

  login() {

    console.log(this.email+ " " + this.password);

    this.user.email = this.email;
    this.user.password = this.password;

    this.authService.wardenLogin(this.user).subscribe(res => {

      if(res == null) {
        alert("email or password is wrong");
        this.ngOnInit();
      }else {
        console.log("Login successful");
        this.route.navigate(['/wardenHomepage']);
      }

    }, err => {
      alert("Login failed");
      this.ngOnInit();
    })

  }

}
