import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/service/admin.service';
import { DialogBoxService } from 'src/app/service/dialog-box.service';
import { NotificationService } from 'src/app/service/notification.service';
import { StaffDetailsComponent } from '../../staff/staff-details/staff-details.component';
import { AdminDetailsComponent } from '../admin-details/admin-details.component';

@Component({
  selector: 'app-admin-management',
  templateUrl: './admin-management.component.html',
  styleUrls: ['./admin-management.component.css']
})
export class AdminManagementComponent implements OnInit {

  adminDetail !: FormGroup;

  girdListData : any;
  displayedColumns : string[] = ['id', 'name', 'email', 'password', 'action'];
  searchKey : string="";

  @ViewChild(MatSort) sort: any = MatSort;
  @ViewChild(MatPaginator) paginator : any = MatPaginator; //optional

  constructor(private route : Router, private formBuilder : FormBuilder, private adminService : AdminService,
     private _notification : NotificationService, private _dialog : MatDialog, private dialogService : DialogBoxService) {

      this.adminService.listen().subscribe((m:any)=> {
        this.fillGird();
      })
  }


  ngOnInit(): void {
    this.fillGird();

    this.adminDetail = this.formBuilder.group({
      name : [''],
      email: [''],
      password: [''],
    });
  }

  fillGird() {
    this.adminService.getAllAdmin().subscribe(
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
    dialogConfig.width ="30%";
    this._dialog.open(AdminDetailsComponent,dialogConfig);
  }

  onEdit(row:any) {
    this.adminService.populateForm(row);

    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose =true;
    dialogConfig.autoFocus = true;
    dialogConfig.width ="30%";
    this._dialog.open(AdminDetailsComponent,dialogConfig);
  }

  onDelete(row : any) {

    this.dialogService.openConfirmDialog('Would you like to delete ' + row.name + ' data?').afterClosed().subscribe(res=> {
      if(res) {
        this.adminService.deleteAdmin(row).subscribe(data=> {
          this._notification.warn("Deleted Successfully");
          this.adminService.filter('');
        });
      }
    });
  }

}
