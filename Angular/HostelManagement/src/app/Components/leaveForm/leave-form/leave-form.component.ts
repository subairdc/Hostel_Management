import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder, MinValidator } from '@angular/forms';
import { Student } from 'src/app/model/student';
import { LeaveForm } from 'src/app/model/leave-form';
import { StudentService } from 'src/app/service/student.service';
import { NotificationService } from 'src/app/service/notification.service';
import { LeaveForm2 } from 'src/app/model/leave-form2';
import { LeaveFormService } from 'src/app/service/leave-form.service';


@Component({
  selector: 'app-leave-form',
  templateUrl: './leave-form.component.html',
  styleUrls: ['./leave-form.component.css']
})
export class LeaveFormComponent implements OnInit {

  id : number =0;
  leaveForm !: FormGroup;

  user : Student = new Student();
  form : LeaveForm = new LeaveForm();
  leaveForm2 :LeaveForm2 = new LeaveForm2();

  name : string = '';
  regNo : string = '';
  roomNo : number = 0;
  hostel : string = '';
  phoneNo : string = '';

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
  contactPhoneNo : string = '';

  constructor(private studentService : StudentService, private route : Router,private router : ActivatedRoute, private formBuilder: FormBuilder,
    public notification : NotificationService, public leaveFormService : LeaveFormService) {

    this.leaveForm = this.formBuilder.group({
      name : [''],
      regNo : [''],
      roomNo : [''],
      hostel : [''],
      phoneNo : [''],

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
      personName : ['',[Validators.required,Validators.minLength(4),Validators.maxLength(25)]],
      relation : [''],
      contactPhoneNo : ['',[Validators.required,Validators.maxLength(10),Validators.maxLength(10)]]
    })
   }

  ngOnInit(): void {
    this.id = this.router.snapshot.params['id'];

    this.studentService.getStudentById(this.id).subscribe(res=>{
      //console.log("result "+ res);
      this.user = res;
    },err=>{
      console.log("Error"+err);
    })
  }

  get f(){
    return this.leaveForm.controls;
  }


  onSubmit() {

    //console.log(this.name+" "+this.phoneNo);

    this.form.name = this.user.name;
    this.form.regNo = this.user.regNo;
    this.form.roomNo = this.user.roomNo;
    this.form.hostel = this.user.hostel;

    this.form.degree = this.user.degree;
    this.form.dept = this.user.dept;
    this.form.year = this.user.year;
    this.form.semester = this.user.sem;

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
    this.form.contactPhoneNo = this.contactPhoneNo;

    //this.studentService.addLeaveForm2

    this.leaveForm2.name = this.user.name;
    this.leaveForm2.regNo = this.user.regNo;
    this.leaveForm2.roomNo = this.user.roomNo;
    this.leaveForm2.parent = "Pending";
    this.leaveForm2.staff = "Pending";
    this.leaveForm2.warden = "Pending";
    this.leaveForm2.leaveStatus = "Pending";


    this.leaveFormService.addLeaveForm(this.form).subscribe(res => {
      if(res == null) {
        alert("Leave Form submit failed");
        //this.ngOnInit();
      }else {
        console.log("Leave Form submitted successful");
        alert("Leave Form submitted successful");
        this.leaveForm.reset();
      }
    }, err => {
      alert("Registration failed.ERROR");
      this.ngOnInit();
    });

    this.leaveFormService.addLeaveForm2(this.leaveForm2).subscribe(res => {
      if(res == null) {
        alert("Leave Form2 submit failed");
        //this.ngOnInit();
      }else {
        console.log("Leave Form2 submitted successful");
        //alert("Leave Form submitted successful");
        this.route.navigate(['/studentDashboard']);
      }
    }, err => {
      alert("Registration2 failed.ERROR");
      //this.ngOnInit();
    });

  }

}
