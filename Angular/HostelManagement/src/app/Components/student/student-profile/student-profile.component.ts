import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Student } from 'src/app/model/student';
import { StudentService } from 'src/app/service/student.service';

@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.css']
})
export class StudentProfileComponent implements OnInit {

  studentDetail !: FormGroup;
  studentObj : Student = new Student();

  name : string = '';
  gender : string = '';
  dateOfBirth : any;
  age : number =0;

  course : string = ''; //UG OR PG
  dept : string = '';   //ECE
  regNo : string = '';
  year : number = 0; //12

  email : string = '';
  password : string = '';
  confirmPassword : string = '';

  status : string = '';
  hostel : string = '';
  //sibling

  //address
  street: string = '';
  city: string = '';
  district: string = '';
  state: string = '';
  pincode: string = '';

  //Parents details
  fatherName : string = '';
  fatherPhoneNo : string = '';
  motherName : string = '';
  motherPhoneNo : string = '';
  phoneNo : string = '';

  //guardian
  guardianName : string = '';
  relationship : string = '';
  guardianAddress : string = '';
  guardianPhoneNo : string = '';

  constructor(private route : Router, private formBuilder : FormBuilder, private studentService : StudentService) { }

  ngOnInit(): void {
    this.studentService.getStudent(this.studentObj).subscribe(res=>{
      this.studentDetail.value.name = res.name;
      console.log(res);
    },err=>{
      console.log(err);
    })


    this.getStudent();

    this.studentDetail = this.formBuilder.group({
      name : ['',Validators.required],
      gender : ['',Validators.required],
      dateOfBirth : ['',Validators.required],
      age : ['',Validators.required],

      course : ['',Validators.required], //UG OR PG
      dept : ['',Validators.required],   //ECE
      regNo : ['',Validators.required],
      year : ['',Validators.required], //12

      email : ['',[Validators.required,Validators.email]],
      password : ['',Validators.required],
      confirmPassword : ['',Validators.required],

      status : ['',Validators.required],
      hostel : ['',Validators.required],
      //sibling

      //address
      street: ['',Validators.required],
      city: ['',Validators.required],
      district: ['',Validators.required],
      state: ['',Validators.required],
      pincode: ['',Validators.required],

      //Parents details
      fatherName : ['',Validators.required],
      fatherPhoneNo : ['',Validators.required],
      motherName : ['',Validators.required],
      motherPhoneNo : ['',Validators.required],
      phoneNo : ['',Validators.required],

      //guardian
      guardianName : ['',],
      relationship : ['',],
      guardianAddress : ['',],
      guardianPhoneNo : ['',]

    });
  }

  getStudent(){
    this.studentDetail.controls['name'].setValue(Student.name);

    this.studentService.getStudent(this.studentObj).subscribe(res=>{
      this.studentObj = res;
  },err=>{
    console.log("error while fetching data.")
  });

  }

  updateStudent() {

    this.studentObj.name = this.studentDetail.value.name;
    this.studentObj.email = this.studentDetail.value.email;
    this.studentObj.password = this.studentDetail.value.password;
    this.studentObj.phoneNo = this.studentDetail.value.phoneNo;

    this.studentService.updateStudent(this.studentObj).subscribe(res=>{
      console.log(res);
    },err=>{
      console.log(err);
    })

  }

}
