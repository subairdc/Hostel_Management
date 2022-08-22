import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { DialogBoxService } from 'src/app/service/dialog-box.service';
import { NotificationService } from 'src/app/service/notification.service';
import { WardenService } from 'src/app/service/warden.service';
import { WardenDetailsComponent } from '../warden-details/warden-details.component';


@Component({
  selector: 'app-warden-management',
  templateUrl: './warden-management.component.html',
  styleUrls: ['./warden-management.component.css']
})
export class WardenManagementComponent implements OnInit {

  constructor(private route : Router, private formBuilder : FormBuilder, private wardenService : WardenService,
    private _notification : NotificationService, private _dialog : MatDialog, private dialogService : DialogBoxService) {

     this.wardenService.listen().subscribe((m:any)=> {
       this.fillGird();
     })
 }

 wardenDetail !: FormGroup;
  // wardenObj : Warden = new Warden();
  // wardenList : Warden[] = [];

  girdListData : any;
  displayedColumns : string[] = ['id','orderNo', 'name', 'email','phoneNo', 'password', 'action'];
  searchKey : string="";

  @ViewChild(MatSort) sort: any = MatSort;
  @ViewChild(MatPaginator) paginator : any = MatPaginator; //optional

  ngOnInit(): void {
    this.fillGird();
    //this.getAllWarden();

    // this.wardenDetail = this.formBuilder.group({
    //   name : [''],
    //   email: [''],
    //   password: [''],
    // });
  }

  fillGird() {
    this.wardenService.getAllWarden().subscribe(
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

    this.wardenService.getMaxOrderNo().subscribe(data => {
      this.wardenService.MaxOrderNo = data.orderNo;
      this.wardenService.initializeFormGroup();
    })

    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose =true;
    dialogConfig.autoFocus = true;
    dialogConfig.width ="50%";
    this._dialog.open(WardenDetailsComponent,dialogConfig);
  }

  onEdit(row:any) {
    this.wardenService.populateForm(row);

    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose =true;
    dialogConfig.autoFocus = true;
    dialogConfig.width ="50%";
    this._dialog.open(WardenDetailsComponent,dialogConfig);
  }

  onDelete(row : any) {

    this.dialogService.openConfirmDialog('Would you like to delete ' + row.name + ' data?').afterClosed().subscribe(res=> {
      if(res) {
        this.wardenService.deleteWarden(row).subscribe(data=> {
          this._notification.warn("Deleted Successfully");
          this.wardenService.filter('');
        });
      }
    });
  }


  // addWarden() {
  //   console.log(this.wardenDetail);
  //   this.wardenObj.name = this.wardenDetail.value.name;
  //   this.wardenObj.email = this.wardenDetail.value.email;
  //   this.wardenObj.password = this.wardenDetail.value.password;

  //   this.wardenService.addWarden(this.wardenObj).subscribe(res=>{
  //       console.log(res);
  //       this.getAllWarden();
  //   },err=>{
  //       console.log(err);
  //   });

  // }

  // getAllWarden() {
  //   this.wardenService.getAllWarden().subscribe(res=>{
  //       this.wardenList = res;
  //   },err=>{
  //     console.log("error while fetching data.")
  //   });
  // }

  // editWarden(warden : Warden) {
  //   this.wardenDetail.controls['name'].setValue(warden.name);
  //   this.wardenDetail.controls['email'].setValue(warden.email);
  //   this.wardenDetail.controls['password'].setValue(warden.password);
  // }

  // updateWarden() {

  //   this.wardenObj.name = this.wardenDetail.value.name;
  //   this.wardenObj.email = this.wardenDetail.value.email;
  //   this.wardenObj.password = this.wardenDetail.value.password;

  //   this.wardenService.updateWarden(this.wardenObj).subscribe(res=>{
  //     console.log(res);
  //     this.getAllWarden();
  //   },err=>{
  //     console.log(err);
  //   })

  // }

  // deleteWarden(warden : Warden) {

  //   this.wardenService.deleteWarden(warden).subscribe(res=>{
  //     console.log(res);
  //     alert('Warden deleted successfully');
  //     this.getAllWarden();
  //   },err => {
  //     console.log(err);
  //   });

  // }

  logout() {
    this.route.navigate(['/wardenLogin']);
  }

}
