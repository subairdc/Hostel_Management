import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder, MinValidator } from '@angular/forms';
import { Student } from 'src/app/model/student';
import { LeaveForm } from 'src/app/model/leave-form';
import { StudentService } from 'src/app/service/student.service';
import { NotificationService } from 'src/app/service/notification.service';
import { LeaveFormService } from 'src/app/service/leave-form.service';


@Component({
  selector: 'app-leave-form',
  templateUrl: './leave-form.component.html',
  styleUrls: ['./leave-form.component.css']
})
export class LeaveFormComponent implements OnInit {

  id : number =0;

  user : Student = new Student();
  leaveForm : LeaveForm = new LeaveForm();

  constructor(private studentService : StudentService, private route : Router,private router : ActivatedRoute, private formBuilder: FormBuilder,
    public notification : NotificationService, public leaveFormService : LeaveFormService) {


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
    return this.leaveFormService.form.controls;
  }


  onSubmit() {

    //console.log(this.name+" "+this.phoneNo);

    this.leaveForm.name = this.user.name;
    this.leaveForm.regNo = this.user.regNo;
    this.leaveForm.phoneNo = this.user.phoneNo;
    this.leaveForm.roomNo = this.user.roomNo;
    this.leaveForm.hostel = this.user.hostel;

    this.leaveForm.degree = this.user.degree;
    this.leaveForm.dept = this.user.dept;
    this.leaveForm.year = this.user.year;
    this.leaveForm.sem = this.user.sem;

    this.leaveForm.leaveCategory = this.leaveFormService.form.value['leaveCategory'];

    this.leaveForm.date = this.leaveFormService.form.value['date'];
    this.leaveForm.day = this.leaveFormService.form.value['day'];
    this.leaveForm.leavingTime = this.leaveFormService.form.value['leavingTime'];
    this.leaveForm.reportingTime = this.leaveFormService.form.value['reportingTime'];
    this.leaveForm.leavePurpose = this.leaveFormService.form.value['leavePurpose'];

    this.leaveForm.fromDate= this.leaveFormService.form.value['fromDate'];
    this.leaveForm.toDate = this.leaveFormService.form.value['toDate'];
    this.leaveForm.noOfDays = this.leaveFormService.form.value['noOfDays'];

    this.leaveForm.contactPerson = this.leaveFormService.form.value['contactPerson'];
    this.leaveForm.personName = this.leaveFormService.form.value['personName'];
    this.leaveForm.relation = this.leaveFormService.form.value['relation'];
    this.leaveForm.contactPhoneNo = this.leaveFormService.form.value['contactPhoneNo'];

    this.leaveForm.parent = "Pending";
    this.leaveForm.staff = "Pending";
    this.leaveForm.warden = "Pending";
    this.leaveForm.remark = "";
    this.leaveForm.leaveStatus = "Pending";

    console.log(this.leaveForm);

    this.leaveFormService.addLeave(this.leaveForm).subscribe(res => {
      if(res == null) {
        alert("Leave Form submit failed");
        //this.ngOnInit();
      }else {
        console.log("Leave Form submitted successful");
        this.notification.success("Leave Form submitted successful");
        this.leaveFormService.form.reset();
        this.route.navigate(['studentHomepage/'+this.id +'/leaveFormStatus/',this.id]);
        //this.route.navigate(['studentDashboard',this.user.id]);
        this.ngOnInit();
      }
    }, err => {
      alert("Registration failed.ERROR");
      this.ngOnInit();
    });
  }


}
