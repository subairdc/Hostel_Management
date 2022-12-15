import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from 'src/app/model/student';
import { AuthService } from 'src/app/service/auth.service';
import { NotificationService } from 'src/app/service/notification.service';
import { StudentService } from 'src/app/service/student.service';

@Component({
  selector: 'app-student-change-password',
  templateUrl: './student-change-password.component.html',
  styleUrls: ['./student-change-password.component.css']
})
export class StudentChangePasswordComponent implements OnInit {

  changePasswordForm !: FormGroup;

  id : number=0;
  password : string = '';
  newPassword : string = '';
  confirmPassword : string = '';

  user : Student = new Student();

  constructor(private authService : AuthService, private router : Router,
    private http : HttpClient, private formBuilder : FormBuilder, public studentService : StudentService,
    public notification : NotificationService, private route: ActivatedRoute) {

      this.changePasswordForm = this.formBuilder.group({
        password :['',[Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{7,}')]],
        newPassword: ['',[Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{7,}')]],
      confirmPassword: ['',[Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{7,}')]],

      },
      {
        validators: this.confirmingPassword("newPassword", "confirmPassword")
      }

      );
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getStudent();
  }

  private getStudent() {
    this.studentService.getStudentById(this.id).subscribe(data => {
      this.user = data;
    })
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
    this.changePasswordForm.reset();
  }

  changePassword() {
    this.user.password = this.changePasswordForm.value['Password'];
    this.user.confirmPassword = this.changePasswordForm.value['newPassword'];
    this.authService.studentChangePassword(this.user).subscribe(res=>{
      if(res == null) {
        this.notification.warn("Password Update failed");
        //alert("Student Details Update failed");
        this.ngOnInit();
      }else {
        //alert("Student Details Updated successful");
        //this.studentService.form.reset();
        this.notification.success("Password Updated successful");
        this.changePasswordForm.reset();
      }
    },err=>{
      console.log(err);
    })

  }

}
