import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Student } from 'src/app/model/student';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-student-change-password',
  templateUrl: './student-change-password.component.html',
  styleUrls: ['./student-change-password.component.css']
})
export class StudentChangePasswordComponent implements OnInit {

  changePasswordForm !: FormGroup;

  currentPassword : string = '';
  password : string = '';
  confirmPassword : string = '';

  user : Student = new Student();

  constructor(private authService : AuthService, private route : Router,
    private http : HttpClient, private formBuilder : FormBuilder) {

      this.changePasswordForm = this.formBuilder.group({
        currentPassword :['',[Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{7,}')]],
        password: ['',[Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{7,}')]],
      confirmPassword: ['',[Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{7,}')]],

      },
      {
        validators: this.confirmingPassword("password", "confirmPassword")
      }

      );
  }

  ngOnInit(): void {
  }

  get f(){
    return this.changePasswordForm.controls;
  }

  confirmingPassword(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      let control = formGroup.controls[controlName];
      let matchingControl = formGroup.controls[matchingControlName]
      if (matchingControl.errors && !matchingControl.errors['confirmingPassword']) {
        return;
      }
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ confirmingPassword: true });
      } else {
        matchingControl.setErrors(null);
      }
    }
  }

  onCancel() {
    
  }

  changePassword() {

  }

}
