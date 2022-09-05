import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Warden } from 'src/app/model/warden';
import { NotificationService } from 'src/app/service/notification.service';
import { WardenService } from 'src/app/service/warden.service';

@Component({
  selector: 'app-warden-profile',
  templateUrl: './warden-profile.component.html',
  styleUrls: ['./warden-profile.component.css']
})
export class WardenProfileComponent implements OnInit {

  id : number =0;
  user : Warden = new Warden();

  gender=["Select Gender","Male","Female","Others"];
  genderS : string ="";

  bloodGrp = ["Select Blood Group","A+","A-","B+","B-","AB+","AB-","O+","O-","A1B+","A1B-","A2+","A2-","Others"];
  bloodGrpS : string = "";

  hostel = ["Select Hostel","Pothigai Boys Hostel","Thamirabharani Girls Hostel"]
  hostelS : string = "";


  constructor(private router : Router, private route : ActivatedRoute, private formBuilder : FormBuilder,
    public wardenService : WardenService, public notification : NotificationService) {

      this.wardenService.form = this.formBuilder.group({
        id : [''],
        name : ['',[Validators.required,Validators.minLength(3),Validators.maxLength(25)]],
        gender : ['',Validators.required],
        dateOfBirth:['',[Validators.required,Validators.maxLength(10)]],
        age:['',[Validators.required,Validators.maxLength(2)]],
        bloodGrp: ['',Validators.required],


        wardenId : ['',[Validators.required,Validators.minLength(4),Validators.maxLength(12)]],
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

    this.wardenService.getWardenById(this.id).subscribe(res=>{
      //console.log("result "+ res);
      this.user = res;
    },err=>{
      console.log("Error"+err);
    })

    this.wardenService.form.disable();

    // this.studentService.form.value['name']= this.user.name;

  }

  get f(){
    return this.wardenService.form.controls;
  }

  onEdit(){
    this.wardenService.form.enable();
  }

  updateDetails() {
    this.wardenService.updateWarden(this.user).subscribe(res=>{
      if(res == null) {
        this.notification.warn("Warden Details Updated failed");
        //alert("Warden Details Update failed");
        this.ngOnInit();
      }else {
        //alert("Warden Details Updated successful");
        //this.wardenService.form.reset();
        this.notification.success("Warden Details Updated successful");
        this.wardenService.form.disable();

      }
    },err=>{
      console.log(err);
    })

  }

}
