import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { DialogBoxService } from 'src/app/service/dialog-box.service';
import { NotificationService } from 'src/app/service/notification.service';
import { StudentService } from 'src/app/service/student.service';
import { StudentDetailsComponent } from '../student-details/student-details.component';


@Component({
  selector: 'app-student-management',
  templateUrl: './student-management.component.html',
  styleUrls: ['./student-management.component.css']
})
export class StudentManagementComponent implements OnInit {

  //studentDetail !: FormGroup;
    // studentObj : Student = new Student();
    // studentList : Student[] = [];
    flag : boolean = false;

  girdListData : any;
  displayedColumns : string[] = ['id', 'name', 'email', 'password', 'action'];
  searchKey : string="";

  @ViewChild(MatSort) sort: any = MatSort;
  @ViewChild(MatPaginator) paginator : any = MatPaginator; //optional

  constructor(private route : Router, private formBuilder : FormBuilder, private studentService : StudentService,
    private _notification : NotificationService, private _dialog : MatDialog, private dialogService : DialogBoxService) {

      this.studentService.listen().subscribe((m:any)=> {
        this.fillGird();
      })
  }

  ngOnInit(): void {
    this.fillGird();
    //this.getAllStudents();

    // this.studentDetail = this.formBuilder.group({
    //   name : [''],
    //   email: [''],
    //   password: [''],
    //   phoneNo: ['']
    // });
  }

  fillGird() {
    this.studentService.getAllStudents().subscribe(
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
    dialogConfig.width ="70%";
    this._dialog.open(StudentDetailsComponent,dialogConfig);
  }

  onView(row:any) {
    this.studentService.populateForm(row);
    this.studentService.form.disable();

    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose =true;
    dialogConfig.autoFocus = true;
    dialogConfig.width ="70%";
    this._dialog.open(StudentDetailsComponent,dialogConfig);
  }

  onEdit(row:any) {


    this.studentService.populateForm(row);

    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose =true;
    dialogConfig.autoFocus = true;
    dialogConfig.width ="70%";
    this._dialog.open(StudentDetailsComponent,dialogConfig);
  }

  onDelete(row : any) {

    this.dialogService.openConfirmDialog('Would you like to delete ' + row.name + ' data?').afterClosed().subscribe(res=> {
      if(res) {
        this.studentService.deleteStudent(row).subscribe(data=> {
          this._notification.warn("Deleted Successfully");
          this.studentService.filter('');
        });
      }
    });
  }

  onApproved(row : any) {

    this.dialogService.openConfirmDialog('Would you like to Approved ' + row.name + ' data?').afterClosed().subscribe(res=> {
      if(res) {
          row.verify = "Verified";
          this.studentService.updateStudent(row).subscribe(data => {
            this.studentService.form.reset();
            this.studentService.initializeFormGroup();
            this._notification.success("Student Verified Successfully");
          });
      }
    });
}


  // onApproved(row : any) {

  //   this.dialogService.openConfirmDialog('Would you like to Approved ' + row.name + ' data?').afterClosed().subscribe(res=> {
  //     if(res) {
  //       if(row.hostel == "Pothigai Boys Hostel") {
  //         this.studentService.addVerifiedStuMale(row).subscribe(data => {
  //           this.studentService.form.reset();
  //           this.studentService.initializeFormGroup();
  //           this._notification.success("Added Successfully");
  //           this.flag = true;
  //         });
  //       }else if (row.hostel == "Thamirabharani Girls Hostel") {
  //         this.studentService.addVerifiedStuFemale(row).subscribe(data => {
  //           this.studentService.form.reset();
  //           this.studentService.initializeFormGroup();
  //           this._notification.success("Added Successfully");
  //           this.flag = true;
  //       });
  //     }
  //   }
  //   if(this.flag) {
  //     this.studentService.deleteStudent(row).subscribe(data=> {
  //       //this._notification.warn("Deleted Successfully");
  //       this.studentService.filter('');
  //       this.flag = false;
  //     });
  //   }
  //   });
  // }

  // addStudent() {
  //   console.log(this.studentDetail);
  //   this.studentObj.name = this.studentDetail.value.name;
  //   this.studentObj.email = this.studentDetail.value.email;
  //   this.studentObj.password = this.studentDetail.value.password;
  //   this.studentObj.phoneNo = this.studentDetail.value.phoneNo;

  //   this.studentService.addStudent(this.studentObj).subscribe(res=>{
  //       console.log(res);
  //       this.getAllStudents();
  //   },err=>{
  //       console.log(err);
  //   });

  // }

  // getAllStudents() {
  //   this.studentService.getAllStudents().subscribe(res=>{
  //       this.studentList = res;
  //   },err=>{
  //     console.log("error while fetching data.")
  //   });
  // }

  // editStudent(student : Student) {
  //   this.studentDetail.controls['name'].setValue(student.name);
  //   this.studentDetail.controls['email'].setValue(student.email);
  //   this.studentDetail.controls['password'].setValue(student.password);
  //   this.studentDetail.controls['phoneNo'].setValue(student.phoneNo);

  // }

  // updateStudent() {

  //   this.studentObj.name = this.studentDetail.value.name;
  //   this.studentObj.email = this.studentDetail.value.email;
  //   this.studentObj.password = this.studentDetail.value.password;
  //   this.studentObj.phoneNo = this.studentDetail.value.phoneNo;

  //   this.studentService.updateStudent(this.studentObj).subscribe(res=>{
  //     console.log(res);
  //     this.getAllStudents();
  //   },err=>{
  //     console.log(err);
  //   })

  // }

  // deleteStudent(student : Student) {

  //   this.studentService.deleteStudent(student).subscribe(res=>{
  //     console.log(res);
  //     alert('Student deleted successfully');
  //     this.getAllStudents();
  //   },err => {
  //     console.log(err);
  //   });

  // }


  logout() {
    //localStorage.removeItem("token");
    this.route.navigate(['/staffLogin']);
  }


}

