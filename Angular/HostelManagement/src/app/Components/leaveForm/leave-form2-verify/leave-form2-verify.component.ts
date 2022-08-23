import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { LeaveForm2 } from 'src/app/model/leave-form2';
import { Staff } from 'src/app/model/staff';
import { LeaveFormService } from 'src/app/service/leave-form.service';
import { NotificationService } from 'src/app/service/notification.service';
import { StaffService } from 'src/app/service/staff.service';

@Component({
  selector: 'app-leave-form2-verify',
  templateUrl: './leave-form2-verify.component.html',
  styleUrls: ['./leave-form2-verify.component.css']
})
export class LeaveForm2VerifyComponent implements OnInit {

  options: string[] = ['Approved','Pending', 'Rejected'];
  // filteredOptions!: Observable<string[]>;

  constructor(private router : Router,private route: ActivatedRoute, public leaveFormService : LeaveFormService, public staffService : StaffService,private formBuilder: FormBuilder,
    public dialogRef : MatDialogRef<LeaveForm2VerifyComponent>, public notification : NotificationService,
    @Inject(MAT_DIALOG_DATA) public data:any) {

    }

  ngOnInit(): void {

    this.leaveFormService.form.controls['roomNo'].disable();
    this.leaveFormService.form.controls['name'].disable();
    this.leaveFormService.form.controls['regNo'].disable();
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
    this.leaveFormService.form.reset();
    this.leaveFormService.initializeFormGroup();
    this.dialogRef.close();
    this.leaveFormService.filter('');
  }

  onClear() {
    this.leaveFormService.form.reset();
    this.leaveFormService.initializeFormGroup();
  }

  enableFormField(){
    this.leaveFormService.form.controls['roomNo'].enable();
    this.leaveFormService.form.controls['name'].enable();
    this.leaveFormService.form.controls['regNo'].enable();
    this.leaveFormService.form.controls['warden'].enable();
    this.leaveFormService.form.controls['leaveStatus'].enable();
  }

  onSubmit() {
    this.enableFormField();

    var leaveForm2Verify = new LeaveForm2;
    leaveForm2Verify.id = this.leaveFormService.form.value['id'];
    leaveForm2Verify.name = this.leaveFormService.form.value['name'];
    leaveForm2Verify.regNo = this.leaveFormService.form.value['regNo'];
    leaveForm2Verify.roomNo = this.leaveFormService.form.value['roomNo'];
    leaveForm2Verify.parent = this.leaveFormService.form.value['parent'];
    leaveForm2Verify.staff = this.leaveFormService.form.value['staff'];
    leaveForm2Verify.warden = this.leaveFormService.form.value['warden'];
    leaveForm2Verify.remark = this.leaveFormService.form.value['remark'];
    leaveForm2Verify.leaveStatus = this.leaveFormService.form.value['leaveStatus'];

    //console.log(leaveForm2Verify);
    this.leaveFormService.updateLeaveForm2(leaveForm2Verify).subscribe(
      data => {
        this.leaveFormService.form.reset();
        this.leaveFormService.initializeFormGroup();
        this.notification.success("Submitted Successfully")
        this.onClose();
      }
    )
  }


}
