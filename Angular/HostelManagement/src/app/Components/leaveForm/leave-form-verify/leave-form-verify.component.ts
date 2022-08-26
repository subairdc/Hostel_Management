import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { LeaveForm } from 'src/app/model/leave-form';
import { LeaveFormService } from 'src/app/service/leave-form.service';
import { NotificationService } from 'src/app/service/notification.service';
import { StaffService } from 'src/app/service/staff.service';

@Component({
  selector: 'app-leave-form-verify',
  templateUrl: './leave-form-verify.component.html',
  styleUrls: ['./leave-form-verify.component.css']
})
export class LeaveFormVerifyComponent implements OnInit {


  // filteredOptions!: Observable<string[]>;

  constructor(private router : Router,private route: ActivatedRoute, public leaveFormService : LeaveFormService, public staffService : StaffService,private formBuilder: FormBuilder,
    public dialogRef : MatDialogRef<LeaveFormVerifyComponent>, public notification : NotificationService,
    @Inject(MAT_DIALOG_DATA) public data:any) {

    }

  ngOnInit(): void {

    // this.leaveFormService.form.controls['roomNo'].disable();
    // this.leaveFormService.form.controls['name'].disable();
    // this.leaveFormService.form.controls['regNo'].disable();


    //console.log(this.leaveFormService.form.value['warden']);
    // if(this.leaveFormService.form.value['leaveStatus'] == "Pending") {
    //   this.leaveFormService.form.controls['warden'].disable();
    //   this.leaveFormService.form.controls['leaveStatus'].disable();
    // }


  }

  get f(){
    return this.leaveFormService.form.controls;
  }

  onClose() {
    this.leaveFormService.form.enable();
    this.leaveFormService.form.reset();
    this.leaveFormService.initializeFormGroup();
    this.dialogRef.close();
    this.leaveFormService.filter('');
  }

  onClear() {
    this.leaveFormService.form.reset();
    this.leaveFormService.initializeFormGroup();
  }

  // enableFormField(){
  //   this.leaveFormService.form.controls['name'].enable();
  //   this.leaveFormService.form.controls['regNo'].enable();
  //   this.leaveFormService.form.controls['phoneNo'].enable();
  //   this.leaveFormService.form.controls['roomNo'].enable();
  //   this.leaveFormService.form.controls['hostel'].enable();

  //   this.leaveFormService.form.controls['degree'].enable();
  //   this.leaveFormService.form.controls['dept'].enable();
  //   this.leaveFormService.form.controls['year'].enable();
  //   this.leaveFormService.form.controls['warden'].enable();
  //   this.leaveFormService.form.controls['leaveStatus'].enable();
  //   this.leaveFormService.form.controls['roomNo'].enable();
  //   this.leaveFormService.form.controls['name'].enable();
  //   this.leaveFormService.form.controls['regNo'].enable();
  //   this.leaveFormService.form.controls['warden'].enable();
  //   this.leaveFormService.form.controls['leaveStatus'].enable();
  //   this.leaveFormService.form.controls['roomNo'].enable();
  //   this.leaveFormService.form.controls['name'].enable();
  //   this.leaveFormService.form.controls['regNo'].enable();
  //   this.leaveFormService.form.controls['warden'].enable();
  //   this.leaveFormService.form.controls['leaveStatus'].enable();

  // }

  onSubmit() {
    this.leaveFormService.form.enable();

    var leaveFormVerify = new LeaveForm;
    leaveFormVerify.id = this.leaveFormService.form.value['id'];
    leaveFormVerify.name = this.leaveFormService.form.value['name'];
    leaveFormVerify.regNo = this.leaveFormService.form.value['regNo'];
    leaveFormVerify.phoneNo = this.leaveFormService.form.value['phoneNo'];
    leaveFormVerify.roomNo = this.leaveFormService.form.value['roomNo'];
    leaveFormVerify.hostel = this.leaveFormService.form.value['hostel'];

    leaveFormVerify.degree = this.leaveFormService.form.value['degree'];
    leaveFormVerify.dept = this.leaveFormService.form.value['dept'];
    leaveFormVerify.year = this.leaveFormService.form.value['year'];
    leaveFormVerify.sem = this.leaveFormService.form.value['sem'];

    leaveFormVerify.leaveCategory = this.leaveFormService.form.value['leaveCategory'];

    leaveFormVerify.date = this.leaveFormService.form.value['date'];
    leaveFormVerify.day = this.leaveFormService.form.value['day'];
    leaveFormVerify.leavingTime = this.leaveFormService.form.value['leavingTime'];
    leaveFormVerify.reportingTime = this.leaveFormService.form.value['reportingTime'];
    leaveFormVerify.leavePurpose = this.leaveFormService.form.value['leavePurpose'];

    leaveFormVerify.fromDate = this.leaveFormService.form.value['fromDate'];
    leaveFormVerify.toDate = this.leaveFormService.form.value['toDate'];
    leaveFormVerify.noOfDays = this.leaveFormService.form.value['noOfDays'];

    leaveFormVerify.contactPerson = this.leaveFormService.form.value['contactPerson'];
    leaveFormVerify.personName = this.leaveFormService.form.value['personName'];
    leaveFormVerify.relation = this.leaveFormService.form.value['relation'];
    leaveFormVerify.contactPhoneNo = this.leaveFormService.form.value['contactPhoneNo'];

    leaveFormVerify.parent = this.leaveFormService.form.value['parent'];
    leaveFormVerify.staff = this.leaveFormService.form.value['staff'];
    leaveFormVerify.warden = this.leaveFormService.form.value['warden'];
    leaveFormVerify.remark = this.leaveFormService.form.value['remark'];
    leaveFormVerify.leaveStatus = this.leaveFormService.form.value['leaveStatus'];

    console.log(leaveFormVerify);
    this.leaveFormService.updateLeave(leaveFormVerify).subscribe(
      data => {
        this.leaveFormService.form.reset();
        this.leaveFormService.initializeFormGroup();
        this.notification.success("Updated Successfully")
        this.onClose();
      }
    )
  }


}
