import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { LeaveForm2 } from 'src/app/model/leave-form2';
import { DialogBoxService } from 'src/app/service/dialog-box.service';
import { LeaveFormService } from 'src/app/service/leave-form.service';
import { NotificationService } from 'src/app/service/notification.service';
import { StudentService } from 'src/app/service/student.service';
import { LeaveForm2VerifyComponent } from '../leave-form2-verify/leave-form2-verify.component';

@Component({
  selector: 'app-leave-form2-management',
  templateUrl: './leave-form2-management.component.html',
  styleUrls: ['./leave-form2-management.component.css']
})
export class LeaveForm2ManagementComponent implements OnInit {



  id : string ='';

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

    this.id = this.route.snapshot.params['id'];

    // this.studentService.getStudentById(this.id).subscribe(res=>{
    //   //console.log("result "+ res);
    //   this.user = res;
    // },err=>{
    //   console.log("Error"+err);
    // });
    //console.log(this.id);

    if(this.id == "stu") {
      this.displayedColumns = ['id','roomNo', 'regNo', 'name', 'parent', 'staff', 'warden', 'remark', 'leaveStatus'];
    }else{
      this.displayedColumns = ['id','roomNo', 'regNo', 'name', 'parent', 'staff', 'warden', 'remark', 'leaveStatus', 'action'];
    }

    this.fillGird();
  }

  fillGird() {
    this.leaveFormService.getAllLeaveForm2().subscribe(
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
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose =true;
    dialogConfig.autoFocus = true;
    dialogConfig.width ="50%";
    this._dialog.open(LeaveForm2VerifyComponent,dialogConfig);
  }

  onEdit(row:any) {
    this.leaveFormService.populateForm(row);

    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose =true;
    dialogConfig.autoFocus = true;
    dialogConfig.width ="40%";
    this._dialog.open(LeaveForm2VerifyComponent,dialogConfig);
  }

  onDelete(row : any) {

    this.dialogService.openConfirmDialog('Would you like to delete ' + row.name + ' data?').afterClosed().subscribe(res=> {
      if(res) {
        this.leaveFormService.deleteLeaveForm2(row).subscribe(data=> {
          this._notification.warn("Deleted Successfully");
          this.leaveFormService.filter('');
        });
      }
    });
  }
  
}
