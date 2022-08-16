import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Student } from 'src/app/model/student';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {

  passwordForm !: FormGroup;
  emailForm !: FormGroup;

  email : string = '';
  password : string = '';
  regNo : string = '';
  showPass : boolean = false;
  showEmail : boolean = false;

  hidePassF : boolean = true;
  hideEmailF : boolean = false;

  user : Student = new Student();

  constructor(private authService : AuthService, private route : Router,
    private http : HttpClient, private formBuilder : FormBuilder) {

    this.passwordForm = this.formBuilder.group({
      email :['',[Validators.required, Validators.email]],
      regNo : ['',[Validators.required,Validators.minLength(12),Validators.maxLength(12)]],
    });

    this.emailForm = this.formBuilder.group({
      regNo : ['',[Validators.required,Validators.minLength(12),Validators.maxLength(12)]],
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
    this.hidePassF = false;
    this.hideEmailF = true;
  }
  hideEmail() {
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
    console.log(this.passwordForm.value['email']+ " " + this.passwordForm.value['regNo']);
    this.user.email = this.passwordForm.value['email'];
    this.user.regNo = this.passwordForm.value['regNo'];

    this.authService.studentPassword(this.user).subscribe(res => {

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
    console.log(this.emailForm.value['regNo']);
    this.user.regNo = this.emailForm.value['regNo'];

    this.authService.studentEmail(this.user).subscribe(res => {
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
