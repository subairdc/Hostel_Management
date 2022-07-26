import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/model/student';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { FormGroup,FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-student-signup',
  templateUrl: './student-signup.component.html',
  styleUrls: ['./student-signup.component.css']
})
export class StudentSignupComponent implements OnInit {

  signupForm !: FormGroup;

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

  user : Student = new Student();

  constructor(private authService : AuthService, private route : Router, private formBuilder: FormBuilder) {
    if(this.user.gender=='Male'){
        this.hostel='Pothigai Boys Hostel'
    }else{
      this.hostel='Thamirabharani Girls Hostel'
    }
  }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      name : ['',[Validators.required,Validators.minLength(4)]],
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
      guardianPhoneNo : ['',],
    });
  }


  get f(){
    return this.signupForm.controls;
  }

  signup() {

    console.log(this.name+" "+ this.email+ " " + this.password + " " +this.gender+ " " +this.phoneNo);

    this.user.name = this.name;
    this.user.gender =this.gender;
    this.user.dateOfBirth = this.dateOfBirth;
    this.user.age = this.age;
    this.user.email = this.email;

    this.user.course = this.course;
    this.user.dept = this.dept;
    this.user.regNo = this.regNo;
    this.user.year = this.year;


    this.user.password = this.password;
    this.user.confirmPassword = this.confirmPassword;
    this.user.status = this.status;
    this.user.hostel = this.hostel;

    this.user.street = this.street;
    this.user.city = this.city;
    this.user.district = this.district;
    this.user.state = this.state;
    this.user.pincode = this.pincode;

    this.user.fatherName = this.fatherName;
    this.user.fatherPhoneNo = this.fatherPhoneNo
    this.user.motherName = this.motherName;
    this.user.motherPhoneNo = this.motherPhoneNo;
    this.user.phoneNo = this.phoneNo

    this.user.guardianName = this.guardianName;
    this.user.relationship = this.relationship;
    this.user.guardianAddress = this.guardianAddress;
    this.user.guardianPhoneNo = this.guardianPhoneNo;

    this.authService.studentSignup(this.user).subscribe(res => {
      if(res == null) {
        alert("Registration failed");
        this.ngOnInit();
      }else {
        console.log(this.hostel);
        console.log("Registration successful");
        alert("Registration successful");
        this.route.navigate(['/studentLogin']);
      }
    }, err => {
      alert("Registration failed.ERROR");
      this.ngOnInit();
    })

  }

}
