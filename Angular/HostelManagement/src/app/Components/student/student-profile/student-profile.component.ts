import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Student } from 'src/app/model/student';
import { NotificationService } from 'src/app/service/notification.service';
import { StudentService } from 'src/app/service/student.service';

@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.css']
})
export class StudentProfileComponent implements OnInit {

  id : number =0;
  user : Student = new Student();

  gender=["Select Gender","Male","Female","Others"];
  genderS : string ="Select Gender";

  bloodGrp = ["Select Blood Group","A+","A-","B+","B-","AB+","AB-","O+","O-","A1B+","A1B-","A2+","A2-","Others"];
  bloodGrpS : string = "Select Blood Group";

  hostel = ["Select Hostel","Pothigai Boys Hostel","Thamirabharani Girls Hostel"]
  hostelS : string = "Select Hostel";


  constructor(private router : Router, private route : ActivatedRoute, private formBuilder : FormBuilder, public studentService : StudentService, public notification : NotificationService) {

     this.studentService.form= this.formBuilder.group({
      id : [''],
      orderNo : [''],
      name : ['',[Validators.required,Validators.minLength(4),Validators.maxLength(25)]],
      email :['',[Validators.required, Validators.email]],
      gender : [''],
      dateOfBirth:['',Validators.required],
      age:[''],
      bloodGrp:[''],

      degree : [''],
      dept : [''],
      regNo : ['',[Validators.required,Validators.minLength(12),Validators.maxLength(12)]],
      year : [''],
      sem:[''],

      // password: ['',[Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{7,}')]],
      // confirmPassword: ['',[Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{7,}')]],

      status : [''],
      hostel : [''],

      street : ['',[Validators.required,Validators.minLength(5),Validators.maxLength(40)]],
      city : [''],
      district : [''],
      state : [''],
      pincode : ['',[Validators.required,Validators.minLength(6)]],

      fatherName : ['',[Validators.required,Validators.minLength(4),Validators.maxLength(25)]],
      fatherPhoneNo : ['',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
      motherName : ['',[Validators.required,Validators.minLength(4),Validators.maxLength(25)]],
      motherPhoneNo : ['',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
      phoneNo : ['',[Validators.required,Validators.minLength(10),Validators.maxLength(12)]],

      guardianName : [''],
      guardianPhoneNo : [''],
      guardianRelation : [''],
      guardianAddress : [''],


    })
   }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.studentService.getStudentById(this.id).subscribe(res=>{
      //console.log("result "+ res);
      this.user = res;
    },err=>{
      console.log("Error"+err);
    })

    this.studentService.form.disable();

    // this.studentService.form.value['name']= this.user.name;

  }

  get f(){
    return this.studentService.form.controls;
  }

  onEdit(){
    this.studentService.form.enable();
  }

  updateDetails() {
    this.studentService.updateStudent(this.user).subscribe(res=>{
      if(res == null) {
        this.notification.warn("Student Details Updated failed");
        //alert("Student Details Update failed");
        this.ngOnInit();
      }else {
        //alert("Student Details Updated successful");
        //this.studentService.form.reset();
        this.notification.success("Student Details Updated successful");
        this.studentService.form.disable();

      }
    },err=>{
      console.log(err);
    })

  }

}
