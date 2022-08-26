import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from 'src/app/model/student';
import { DialogBoxService } from 'src/app/service/dialog-box.service';
import { LeaveFormService } from 'src/app/service/leave-form.service';
import { NotificationService } from 'src/app/service/notification.service';
import { StudentService } from 'src/app/service/student.service';
import { LeaveFormVerifyComponent } from '../leave-form-verify/leave-form-verify.component';

@Component({
  selector: 'app-leave-form-management',
  templateUrl: './leave-form-management.component.html',
  styleUrls: ['./leave-form-management.component.css']
})
export class LeaveFormManagementComponent implements OnInit {

  id : number =0;
  regNo : string ='';

  user : Student = new Student();

  girdListData : any;
  displayedColumns : string[] = ['id','roomNo', 'regNo', 'name', 'parent', 'staff', 'warden', 'remark', 'leaveStatus','action'];
  searchKey : string="";

  @ViewChild(MatSort) sort: any = MatSort;
  @ViewChild(MatPaginator) paginator : any = MatPaginator; //optional

  constructor(private router : Router, private route : ActivatedRoute, private formBuilder : FormBuilder, private leaveFormService : LeaveFormService,
    private _notification : NotificationService, private _dialog : MatDialog, private dialogService : DialogBoxService,
    public studentService : StudentService) {
      this.leaveFormService.listen().subscribe((m:any)=> {
        this.fillGird();
      })
    }

  ngOnInit(): void {
   // this.fillGird();
    this.id = this.route.snapshot.params['id'];


    // this.studentService.getStudentById(this.id).subscribe(res=>{
    //   //console.log("result "+ res);
    //   this.user = res;
    // },err=>{
    //   console.log("Error"+err);
    // });
    //console.log(this.id);

    if(this.id !=null) {
      this.displayedColumns = ['id','roomNo', 'regNo', 'name', 'parent', 'staff', 'warden', 'remark', 'leaveStatus'];
      // this.fillGirdStudent();
      this.getStudent();
    }else{
      this.displayedColumns = ['id','roomNo', 'regNo', 'name', 'parent', 'staff', 'warden', 'remark', 'leaveStatus', 'action'];
      this.fillGird();
    }
    this.fillGird();

  }

  private getStudent() {
    this.studentService.getStudentById(this.id).subscribe(data => {
      this.user = data;
    })
  }

  // fillGirdStudent() {
  //   this.regNo = this.user.regNo;
  //   this.leaveFormService.getLeaveByRegNo(this.user.regNo).subscribe(
  //     data =>{ this.girdListData = new MatTableDataSource(data);
  //     this.girdListData.sort = this.sort;
  //     this.girdListData.paginator = this.paginator; //optional

  //   })
  // }

  fillGird() {
    this.leaveFormService.getAllLeave().subscribe(
      data =>{ this.girdListData = new MatTableDataSource(data);
      this.girdListData.sort = this.sort;
      this.girdListData.paginator = this.paginator; //optional

    })
  }

  applyFilter() {
    this.girdListData.filter = this.searchKey.trim().toLowerCase();
  }

  onSearchClear() {
    this.searchKey= "";
    this.applyFilter();
  }

  onCreate() {
    if(this.id != null) {
      this.router.navigate(['studentHomepage/'+this.id +'/leaveForm/',this.id]);
    } else{
      const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose =true;
    dialogConfig.autoFocus = true;
    dialogConfig.width ="60%";
    this._dialog.open(LeaveFormVerifyComponent,dialogConfig);
    }
  }

  onView(row:any) {
    this.leaveFormService.populateForm(row);
    this.leaveFormService.form.disable();

    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose =true;
    dialogConfig.autoFocus = true;
    dialogConfig.width ="60%";
    this._dialog.open(LeaveFormVerifyComponent,dialogConfig);
  }

  onEdit(row:any) {
    this.leaveFormService.populateForm(row);

    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose =true;
    dialogConfig.autoFocus = true;
    dialogConfig.width ="60%";
    this._dialog.open(LeaveFormVerifyComponent,dialogConfig);
  }

  onDelete(row : any) {

    this.dialogService.openConfirmDialog('Would you like to delete ' + row.name + ' data?').afterClosed().subscribe(res=> {
      if(res) {
        this.leaveFormService.deleteLeave(row).subscribe(data=> {
          this._notification.warn("Deleted Successfully");
          this.leaveFormService.filter('');
        });
      }
    });
  }

  onApproved(row : any) {

    this.dialogService.openConfirmDialog('Would you like to Approved ' + row.name + ' data?').afterClosed().subscribe(res=> {
      if(res) {
          row.verify = "Verified";
          this.leaveFormService.updateLeave(row).subscribe(data => {
            this.leaveFormService.form.reset();
            this.leaveFormService.initializeFormGroup();
            this._notification.success("Student Verified Successfully");
          });
      }
    });
}


}
