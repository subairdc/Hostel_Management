import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Admin } from 'src/app/model/admin';
import { AdminService } from 'src/app/service/admin.service';
import { NotificationService } from 'src/app/service/notification.service';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css']
})
export class AdminProfileComponent implements OnInit {

  id : number =0;
  user : Admin = new Admin();

  gender=["Select Gender","Male","Female","Others"];
  genderS : string ="";

  bloodGrp = ["Select Blood Group","A+","A-","B+","B-","AB+","AB-","O+","O-","A1B+","A1B-","A2+","A2-","Others"];
  bloodGrpS : string = "";

  hostel = ["Select Hostel","Pothigai Boys Hostel","Thamirabharani Girls Hostel"]
  hostelS : string = "";


  constructor(private router : Router, private route : ActivatedRoute, private formBuilder : FormBuilder,
    public adminService : AdminService, public notification : NotificationService) {

      this.adminService.form = this.formBuilder.group({
        id : [''],
        name : ['',[Validators.required,Validators.minLength(3),Validators.maxLength(25)]],
        gender : ['',Validators.required],
        dateOfBirth:['',[Validators.required,Validators.maxLength(10)]],
        age:['',[Validators.required,Validators.maxLength(2)]],
        bloodGrp: ['',Validators.required],


        adminId : ['',[Validators.required,Validators.minLength(4),Validators.maxLength(12)]],
        email :['',[Validators.required, Validators.email]],
        phoneNo : ['',[Validators.required,Validators.minLength(10),Validators.maxLength(12)]],


        // password: ['',[Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{7,}')]],
        // confirmPassword: ['',[Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{7,}')]],

        status : ['',Validators.required],

        street : ['',[Validators.required,Validators.minLength(3),Validators.maxLength(50)]],
        city : ['',Validators.required],
        district : ['',Validators.required],
        state : ['',Validators.required],
        pincode : ['',[Validators.required,Validators.minLength(6)]]
    });
    }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];

    this.adminService.getAdminById(this.id).subscribe(res=>{
      //console.log("result "+ res);
      this.user = res;
    },err=>{
      console.log("Error"+err);
    })

    this.adminService.form.disable();

    // this.studentService.form.value['name']= this.user.name;

  }

  get f(){
    return this.adminService.form.controls;
  }

  onEdit(){
    this.adminService.form.enable();
  }

  updateDetails() {
    this.adminService.updateAdmin(this.user).subscribe(res=>{
      if(res == null) {
        this.notification.warn("Admin Details Updated failed");
        //alert("Admin Details Update failed");
        this.ngOnInit();
      }else {
        //alert("Admin Details Updated successful");
        //this.adminService.form.reset();
        this.notification.success("Admin Details Updated successful");
        this.adminService.form.disable();

      }
    },err=>{
      console.log(err);
    })

  }

}
