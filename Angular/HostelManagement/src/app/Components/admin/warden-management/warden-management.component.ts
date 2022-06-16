import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Warden } from 'src/app/model/warden';
import { WardenService } from 'src/app/service/warden.service';


@Component({
  selector: 'app-warden-management',
  templateUrl: './warden-management.component.html',
  styleUrls: ['./warden-management.component.css']
})
export class WardenManagementComponent implements OnInit {

  wardenDetail !: FormGroup;
  wardenObj : Warden = new Warden();
  wardenList : Warden[] = [];

  constructor(private route : Router, private formBuilder : FormBuilder, private wardenService : WardenService) { }

  ngOnInit(): void {
    this.getAllWarden();

    this.wardenDetail = this.formBuilder.group({
      name : [''],
      email: [''],
      password: [''],
    });
  }


  addWarden() {
    console.log(this.wardenDetail);
    this.wardenObj.name = this.wardenDetail.value.name;
    this.wardenObj.email = this.wardenDetail.value.email;
    this.wardenObj.password = this.wardenDetail.value.password;

    this.wardenService.addWarden(this.wardenObj).subscribe(res=>{
        console.log(res);
        this.getAllWarden();
    },err=>{
        console.log(err);
    });

  }

  getAllWarden() {
    this.wardenService.getAllWarden().subscribe(res=>{
        this.wardenList = res;
    },err=>{
      console.log("error while fetching data.")
    });
  }

  editWarden(warden : Warden) {
    this.wardenDetail.controls['name'].setValue(warden.name);
    this.wardenDetail.controls['email'].setValue(warden.email);
    this.wardenDetail.controls['password'].setValue(warden.password);
  }

  updateWarden() {

    this.wardenObj.name = this.wardenDetail.value.name;
    this.wardenObj.email = this.wardenDetail.value.email;
    this.wardenObj.password = this.wardenDetail.value.password;

    this.wardenService.updateWarden(this.wardenObj).subscribe(res=>{
      console.log(res);
      this.getAllWarden();
    },err=>{
      console.log(err);
    })

  }

  deleteWarden(warden : Warden) {

    this.wardenService.deleteWarden(warden).subscribe(res=>{
      console.log(res);
      alert('Warden deleted successfully');
      this.getAllWarden();
    },err => {
      console.log(err);
    });

  }

  logout() {
    this.route.navigate(['/wardenLogin']);
  }

}
