import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Staff } from 'src/app/model/staff';
import { StaffService } from 'src/app/service/staff.service';

@Component({
  selector: 'app-staff-management',
  templateUrl: './staff-management.component.html',
  styleUrls: ['./staff-management.component.css']
})
export class StaffManagementComponent implements OnInit {
  staffDetail !: FormGroup;
  staffObj : Staff = new Staff();
  staffList : Staff[] = [];

  constructor(private route : Router, private formBuilder : FormBuilder, private staffService : StaffService) { }

  ngOnInit(): void {
    this.getAllStaff();

    this.staffDetail = this.formBuilder.group({
      name : [''],
      email: [''],
      password: [''],
    });
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
    this.staffDetail.controls['salary'].setValue(staff.password);
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
    this.route.navigate(['/wardenLogin']);
  }

}
