import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Staff } from 'src/app/model/staff';
import { StaffService } from 'src/app/service/staff.service';


@Component({
  selector: 'app-staff-management',
  templateUrl: './staff-management.component.html',
  styleUrls: ['./staff-management.component.css'],

})
export class StaffManagementComponent implements OnInit {
  staffDetail !: FormGroup;
  staffObj : Staff = new Staff();
  staffList : Staff[] = [];

  girdListData : any;
  displayedColumns : string[] = ['id', 'name', 'email', 'password', 'action'];
  searchKey : string="";


  constructor(private route : Router, private formBuilder : FormBuilder, private staffService : StaffService) { }

  @ViewChild(MatSort) sort: any = MatSort;
  @ViewChild(MatPaginator) paginator : any = MatPaginator; //optional

  ngOnInit(): void {
    this.fillGird();
    this.getAllStaff();

    this.staffDetail = this.formBuilder.group({
      name : [''],
      email: [''],
      password: [''],
    });
  }

  fillGird() {
    this.staffService.getAllStaff().subscribe(
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




  addStaff() {
    console.log(this.staffDetail);
    this.staffObj.name = this.staffDetail.value.name;
    this.staffObj.email = this.staffDetail.value.email;
    this.staffObj.password = this.staffDetail.value.password;

    this.staffService.addStaff(this.staffObj).subscribe(res=>{
        console.log(res);
        this.getAllStaff();
    },err=>{
        console.log(err);
    });

  }

  getAllStaff() {
    this.staffService.getAllStaff().subscribe(res=>{
        this.staffList = res;
    },err=>{
      console.log("error while fetching data.")
    });
  }

  editStaff(staff : Staff) {
    this.staffDetail.controls['name'].setValue(staff.name);
    this.staffDetail.controls['email'].setValue(staff.email);
    this.staffDetail.controls['password'].setValue(staff.password);
  }

  updateStaff() {

    this.staffObj.name = this.staffDetail.value.name;
    this.staffObj.email = this.staffDetail.value.email;
    this.staffObj.password = this.staffDetail.value.password;

    this.staffService.updateStaff(this.staffObj).subscribe(res=>{
      console.log(res);
      this.getAllStaff();
    },err=>{
      console.log(err);
    })

  }

  deleteStaff(staff : Staff) {

    this.staffService.deleteStaff(staff).subscribe(res=>{
      console.log(res);
      alert('Staff deleted successfully');
      this.getAllStaff();
    },err => {
      console.log(err);
    });

  }

  logout() {
    this.route.navigate(['/staffLogin']);
  }

}
