import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { map, Observable, startWith } from 'rxjs';
import { LeaveForm2 } from 'src/app/model/leave-form2';
import { LeaveFormService } from 'src/app/service/leave-form.service';
import { NotificationService } from 'src/app/service/notification.service';

@Component({
  selector: 'app-leave-form2-verify',
  templateUrl: './leave-form2-verify.component.html',
  styleUrls: ['./leave-form2-verify.component.css']
})
export class LeaveForm2VerifyComponent implements OnInit {

  options: string[] = ['Pending', 'Approved', 'Rejected'];
  // filteredOptions!: Observable<string[]>;

  constructor(private route : Router, public leaveFormService : LeaveFormService,private formBuilder: FormBuilder,
    public dialogRef : MatDialogRef<LeaveForm2VerifyComponent>, public notification : NotificationService,
    @Inject(MAT_DIALOG_DATA) public data:any) {

    }

  ngOnInit(): void {
    // this.filteredOptions = this.leaveFormService.form.valueChanges.pipe(
    //   startWith(''),
    //   map(value => this._filter(value || '')),
    // );
  }

  // private _filter(value: string): string[] {
  //   const filterValue = value.toLowerCase();

  //   return this.options.filter(option => option.toLowerCase().includes(filterValue));
  // }

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

  onSubmit() {
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
