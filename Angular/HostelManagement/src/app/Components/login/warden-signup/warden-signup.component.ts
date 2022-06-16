import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Warden } from 'src/app/model/warden';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-warden-signup',
  templateUrl: './warden-signup.component.html',
  styleUrls: ['./warden-signup.component.css']
})
export class WardenSignupComponent implements OnInit {

  name : string = '';
  email : string = '';
  password : string = '';

  user : Warden = new Warden();

  constructor(private authService : AuthService, private route : Router) { }


  ngOnInit(): void {
  }

  signup() {

    console.log(this.name+" "+ this.email+ " " + this.password);

    this.user.email = this.email;
    this.user.password = this.password;
    this.user.name = this.name;

    this.authService.wardenSignup(this.user).subscribe(res => {
      if(res == null) {
        alert("Registration failed");
        this.ngOnInit();
      }else {
        console.log("Registration successful");
        alert("Registration successful");
        this.route.navigate(['/wardenLogin']);
      }
    }, err => {
      alert("Registration failed.");
      this.ngOnInit();
    })

  }

}
