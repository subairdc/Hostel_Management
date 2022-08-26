import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Staff } from 'src/app/model/staff';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-staff-forget-password',
  templateUrl: './staff-forget-password.component.html',
  styleUrls: ['./staff-forget-password.component.css']
})
export class StaffForgetPasswordComponent implements OnInit {

  passwordForm !: FormGroup;
  emailForm !: FormGroup;

  email : string = '';
  password : string = '';
  regNo : string = '';
  showPass : boolean = false;
  showEmail : boolean = false;

  hidePassF : boolean = true;
  hideEmailF : boolean = false;

  user : Staff = new Staff();

  constructor(private authService : AuthService, private route : Router,
    private http : HttpClient, private formBuilder : FormBuilder) {

    this.passwordForm = this.formBuilder.group({
      email :['',[Validators.required, Validators.email]],
      staffId : ['',[Validators.required,Validators.minLength(12),Validators.maxLength(12)]],
    });

    this.emailForm = this.formBuilder.group({
      staffId : ['',[Validators.required,Validators.minLength(12),Validators.maxLength(12)]],
    });
   }

  ngOnInit(): void {
  }

  get f(){
    return this.passwordForm.controls;
  }
  get e(){
    return this.emailForm.controls;
  }

  hidePass() {
    this.emailForm.reset();
    this.showPass = false;
    this.hidePassF = false;
    this.hideEmailF = true;
  }
  hideEmail() {
    this.passwordForm.reset();
    this.showEmail = false;
    this.hidePassF = true;
    this.hideEmailF = false;
  }


  onCancel() {
    this.passwordForm.reset();
    this.emailForm.reset();
    this.showPass = false;
    this.showEmail = false;
  }

  findPassword() {
    console.log(this.passwordForm.value['email']+ " " + this.passwordForm.value['staffId']);
    this.user.email = this.passwordForm.value['email'];
    this.user.staffId = this.passwordForm.value['staffId'];

    this.authService.staffPassword(this.user).subscribe(res => {

      if(res == null) {
        alert("Email or Date of Birth is wrong");
        this.passwordForm.reset();
        //this.ngOnInit();
      }else {
        console.log("Login1 successful");
        this.password = res.password;
        this.showPass = true;
      }

    }, err => {
      alert("Login failed");
      this.ngOnInit();
    })
  }

  findEmail() {
    console.log(this.emailForm.value['staffId']);
    this.user.staffId = this.emailForm.value['staffId'];

    this.authService.staffEmail(this.user).subscribe(res => {
      if(res == null) {
        alert("Reg No. is wrong");
        this.passwordForm.reset();
        //this.ngOnInit();
      }else {
        console.log("Login2 successful");
        this.email = res.email;
        this.showEmail = true;
      }

    }, err => {
      alert("Login failed");
      this.ngOnInit();
    })
  }


}
