import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Student } from 'src/app/model/student';
import { LeaveForm } from 'src/app/model/leave-form';
import { StudentService } from 'src/app/service/student.service';


@Component({
  selector: 'app-leave-form',
  templateUrl: './leave-form.component.html',
  styleUrls: ['./leave-form.component.css']
})
export class LeaveFormComponent implements OnInit {

  leaveForm !: FormGroup;

  user : Student = new Student();
  form : LeaveForm = new LeaveForm();

  name : string = '';
  regNo : string = '';
  roomNo : string = '';
  hostel : string = '';

  degree : string = '';
  dept : string = '';
  year : number = 0;
  semester : number = 0;

  leaveCategory : string ='';

  date : any;
  day : string = '';
  leavingTime : string = '';
  reportingTime : string = '';
  leavePurpose : string = '';

  fromDate : any;
  toDate : any;
  noOfDays : number =0;

  contactPerson : string = '';
  personName : string = '';
  relation : string = '';
  phoneNo : string = '';

  constructor(private studentService : StudentService, private route : Router, private formBuilder: FormBuilder) {

    this.leaveForm = this.formBuilder.group({
      name : ['',Validators.required],
      regNo : [''],
      roomNo : [''],
      hostel : [''],

      degree : [''], //UG OR PG
      dept : [''],   //ECE
      year : [''], //12
      semester : [''],

      leaveCategory : [''],

      date : [''],
      day : [''],
      leavingTime : [''],
      reportingTime : [''],
      leavePurpose : [''],

      fromDate : [''],
      toDate : [''],
      noOfDays : [''],

      contactPerson : [''],
      personName : [''],
      relation : [''],
      phoneNo : ['']
    })
   }

  ngOnInit(): void {
  }

  onSubmit() {

    console.log(this.name+" "+this.phoneNo);

    this.form.name = this.name;
    this.form.regNo = this.regNo;
    this.form.roomNo = this.roomNo;
    this.form.hostel = this.hostel;

    this.form.degree = this.degree;
    this.form.dept = this.dept;
    this.form.year = this.year;
    this.form.semester = this.semester;

    this.form.leaveCategory = this.leaveCategory;

    this.form.date = this.date;
    this.form.day = this.day;
    this.form.leavingTime = this.leavingTime;
    this.form.reportingTime = this.reportingTime;
    this.form.leavePurpose = this.leavePurpose;

    this.form.fromDate= this.fromDate;
    this.form.toDate = this.toDate;
    this.form.noOfDays = this.noOfDays;

    this.form.contactPerson = this.contactPerson;
    this.form.personName = this.personName;
    this.form.relation = this.relation;
    this.form.phoneNo = this.phoneNo;


    this.studentService.addLeaveForm(this.form).subscribe(res => {
      if(res == null) {
        alert("Leave Form submit failed");
        this.ngOnInit();
      }else {
        console.log("Leave Form submitted successful");
        alert("Leave Form submitted successful");
        this.leaveForm.reset();
        //this.route.navigate(['/studentLogin']);
      }
    }, err => {
      alert("Registration failed.ERROR");
      this.ngOnInit();
    })

  }

}
