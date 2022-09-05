import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Staff } from 'src/app/model/staff';
import { NotificationService } from 'src/app/service/notification.service';
import { StaffService } from 'src/app/service/staff.service';

@Component({
  selector: 'app-staff-profile',
  templateUrl: './staff-profile.component.html',
  styleUrls: ['./staff-profile.component.css']
})
export class StaffProfileComponent implements OnInit {

  id : number =0;
  user : Staff = new Staff();

  gender=["Select Gender","Male","Female","Others"];
  genderS : string ="";

  bloodGrp = ["Select Blood Group","A+","A-","B+","B-","AB+","AB-","O+","O-","A1B+","A1B-","A2+","A2-","Others"];
  bloodGrpS : string = "";

  hostel = ["Select Hostel","Pothigai Boys Hostel","Thamirabharani Girls Hostel"]
  hostelS : string = "";


  constructor(private router : Router, private route : ActivatedRoute, private formBuilder : FormBuilder,
    public staffService : StaffService, public notification : NotificationService) {

      this.staffService.form = this.formBuilder.group({
        id : [''],
        name : ['',[Validators.required,Validators.minLength(3),Validators.maxLength(25)]],
        gender : ['',Validators.required],
        dateOfBirth:['',[Validators.required,Validators.maxLength(10)]],
        age:['',[Validators.required,Validators.maxLength(2)]],
        bloodGrp: ['',Validators.required],


        staffId : ['',[Validators.required,Validators.minLength(4),Validators.maxLength(12)]],
        email :['',[Validators.required, Validators.email]],
        phoneNo : ['',[Validators.required,Validators.minLength(10),Validators.maxLength(12)]],


        // password: ['',[Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{7,}')]],
        // confirmPassword: ['',[Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{7,}')]],

        status : ['',Validators.required],
        hostel : ['',Validators.required],

        street : ['',[Validators.required,Validators.minLength(3),Validators.maxLength(50)]],
        city : ['',Validators.required],
        district : ['',Validators.required],
        state : ['',Validators.required],
        pincode : ['',[Validators.required,Validators.minLength(6)]]
    });
    }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];

    this.staffService.getStaffById(this.id).subscribe(res=>{
      //console.log("result "+ res);
      this.user = res;
    },err=>{
      console.log("Error"+err);
    })

    this.staffService.form.disable();

    // this.studentService.form.value['name']= this.user.name;

  }

  get f(){
    return this.staffService.form.controls;
  }

  onEdit(){
    this.staffService.form.enable();
  }

  updateDetails() {
    this.staffService.updateStaff(this.user).subscribe(res=>{
      if(res == null) {
        this.notification.warn("Staff Details Updated failed");
        //alert("Student Details Update failed");
        this.ngOnInit();
      }else {
        //alert("Staff Details Updated successful");
        //this.staffService.form.reset();
        this.notification.success("Staff Details Updated successful");
        this.staffService.form.disable();

      }
    },err=>{
      console.log(err);
    })

  }


}
