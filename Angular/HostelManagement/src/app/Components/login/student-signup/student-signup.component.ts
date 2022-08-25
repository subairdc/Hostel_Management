import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/model/student';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { FormGroup,FormControl, Validators, FormBuilder } from '@angular/forms';
import { NotificationService } from 'src/app/service/notification.service';
import { StudentService } from 'src/app/service/student.service';

@Component({
  selector: 'app-student-signup',
  templateUrl: './student-signup.component.html',
  styleUrls: ['./student-signup.component.css']
})
export class StudentSignupComponent implements OnInit {

  imageError: any;
  isImageSaved!: boolean;
  cardImageBase64!: string;
  imageURL :string = "../../../assets/profile.png";
  orderNo: string='';

  user : Student = new Student();
  gender=["Select Gender","Male","Female","Others"];
  genderS : string ="Select Gender";

  bloodGrp = ["Select Blood Group","A+","A-","B+","B-","AB+","AB-","O+","O-","A1B+","A1B-","A2+","A2-","Others"];
  bloodGrpS : string = "Select Blood Group";

  hostel = ["Select Hostel","Pothigai Boys Hostel","Thamirabharani Girls Hostel"]
  hostelS : string = "Select Hostel";

  hide = true; //password visibility
  passwordShown : boolean = false;
  passwordType: string = 'password';

  constructor(private authService : AuthService, private route : Router, private formBuilder: FormBuilder,
    public notification : NotificationService,public studentService : StudentService ) {

  }

  ngOnInit(): void {
    if( this.genderS=="Male"){
      this.hostelS = "Pothigai Boys Hostel"
    }else if(this.genderS=="Female" || this.genderS =="Others") {
      this.hostelS ="Thamirabharani Girls Hostel"
    }else {
      this.hostelS ="Select Hostel"
    }

  }


  get f(){
    return this.studentService.form.controls;
  }

  togglePassword() {
    if(this.passwordShown) {
      this.passwordShown = false;
      this.passwordType = 'password';
    }else {
      this.passwordShown = true;
      this.passwordType = 'password';
    }
  }

  onClear() {
    this.studentService.form.reset();
    this.studentService.initializeFormGroup();
  }

  signup() {
    //var studentDetails = new Student;
    // studentDetails.id = this.studentService.form.value['id'];
    // studentDetails.orderNo = this.studentService.form.value['orderNo'];
    this.user.name = this.studentService.form.value['name'];
    this.user.email = this.studentService.form.value['email'];
    this.user.gender = this.studentService.form.value['gender'];
    this.user.dateOfBirth = this.studentService.form.value['dateOfBirth'];
    this.user.age = this.studentService.form.value['age'];
    this.user.bloodGrp = this.studentService.form.value['bloodGrp'];

    this.user.degree = this.studentService.form.value['degree'];
    this.user.dept = this.studentService.form.value['dept'];
    this.user.regNo = this.studentService.form.value['regNo'];
    this.user.year = this.studentService.form.value['year'];
    this.user.sem = this.studentService.form.value['sem'];

    this.user.password = this.studentService.form.value['password'];
    this.user.confirmPassword = this.studentService.form.value['confirmPassword'];

    this.user.status = this.studentService.form.value['status'];
    this.user.hostel = this.studentService.form.value['hostel'];

    this.user.street = this.studentService.form.value['street'];
    this.user.city = this.studentService.form.value['city'];
    this.user.district = this.studentService.form.value['district'];
    this.user.state = this.studentService.form.value['state'];
    this.user.pincode = this.studentService.form.value['pincode'];

    this.user.fatherName = this.studentService.form.value['fatherName'];
    this.user.fatherPhoneNo = this.studentService.form.value['fatherPhoneNo'];
    this.user.motherName = this.studentService.form.value['motherName'];
    this.user.motherPhoneNo = this.studentService.form.value['motherPhoneNo'];
    this.user.phoneNo = this.studentService.form.value['phoneNo'];

    this.user.guardianName = this.studentService.form.value['guardianName'];
    this.user.guardianPhoneNo = this.studentService.form.value['guardianPhoneNo'];
    this.user.guardianRelation = this.studentService.form.value['guardianRelation'];
    this.user.guardianAddress = this.studentService.form.value['guardianAddress'];

    this.user.verify = "Pending";

    // this.user.dateOfEnrollment =
    this.ngOnInit();

    this.authService.studentSignup(this.user).subscribe(res => {
      if(res == null) {
        alert("User Already Exist(Email)");
        this.ngOnInit();
      }else {
        alert("Registration successful");
        this.studentService.form.reset();
        this.notification.success("Student Registration Successful")
        this.route.navigate(['/studentLogin']);
      }
    }, err => {
      alert("Registration failed.ERROR");
      this.ngOnInit();
    })
  }

  onCancel() {
    this.studentService.form.reset();
    this.studentService.initializeFormGroup();
  }

}
