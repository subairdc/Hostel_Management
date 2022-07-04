import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Student } from 'src/app/model/student';
import { StudentService } from 'src/app/service/student.service';


@Component({
  selector: 'app-student-management',
  templateUrl: './student-management.component.html',
  styleUrls: ['./student-management.component.css']
})
export class StudentManagementComponent implements OnInit {

  studentDetail !: FormGroup;
    studentObj : Student = new Student();
    studentList : Student[] = [];

  constructor(private route : Router, private formBuilder : FormBuilder, private studentService : StudentService) { }

  ngOnInit(): void {
    this.getAllStudents();

    this.studentDetail = this.formBuilder.group({
      name : [''],
      email: [''],
      password: [''],
      phoneNo: ['']
    });
  }

  addStudent() {
    console.log(this.studentDetail);
    this.studentObj.name = this.studentDetail.value.name;
    this.studentObj.email = this.studentDetail.value.email;
    this.studentObj.password = this.studentDetail.value.password;
    this.studentObj.phoneNo = this.studentDetail.value.phoneNo;

    this.studentService.addStudent(this.studentObj).subscribe(res=>{
        console.log(res);
        this.getAllStudents();
    },err=>{
        console.log(err);
    });

  }

  getAllStudents() {
    this.studentService.getAllStudents().subscribe(res=>{
        this.studentList = res;
    },err=>{
      console.log("error while fetching data.")
    });
  }

  editStudent(student : Student) {
    this.studentDetail.controls['name'].setValue(student.name);
    this.studentDetail.controls['email'].setValue(student.email);
    this.studentDetail.controls['password'].setValue(student.password);
    this.studentDetail.controls['phoneNo'].setValue(student.phoneNo);

  }

  updateStudent() {

    this.studentObj.name = this.studentDetail.value.name;
    this.studentObj.email = this.studentDetail.value.email;
    this.studentObj.password = this.studentDetail.value.password;
    this.studentObj.phoneNo = this.studentDetail.value.phoneNo;

    this.studentService.updateStudent(this.studentObj).subscribe(res=>{
      console.log(res);
      this.getAllStudents();
    },err=>{
      console.log(err);
    })

  }

  deleteStudent(student : Student) {

    this.studentService.deleteStudent(student).subscribe(res=>{
      console.log(res);
      alert('Student deleted successfully');
      this.getAllStudents();
    },err => {
      console.log(err);
    });

  }


  logout() {
    //localStorage.removeItem("token");
    this.route.navigate(['/staffLogin']);
  }


}

