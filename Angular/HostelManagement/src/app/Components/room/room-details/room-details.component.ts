import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Admin } from 'src/app/model/admin';
import { Room } from 'src/app/model/room';
import { AdminService } from 'src/app/service/admin.service';
import { NotificationService } from 'src/app/service/notification.service';
import { RoomService } from 'src/app/service/room.service';
import { StudentService } from 'src/app/service/student.service';

@Component({
  selector: 'app-room-details',
  templateUrl: './room-details.component.html',
  styleUrls: ['./room-details.component.css']
})
export class RoomDetailsComponent implements OnInit {

  roomDetails = new Room;

  // id : number =0;
  // user : Admin = new Admin();

  constructor( private route : Router,private router : ActivatedRoute, public roomService : RoomService, public studentService : StudentService, public adminService : AdminService,
    public dialogRef : MatDialogRef<RoomDetailsComponent>, public notification : NotificationService,
    @Inject(MAT_DIALOG_DATA) public data:any) { }

    ngOnInit(): void {
      // this.id = this.router.snapshot.params['id'];

      // this.adminService.getAdminById(this.id).subscribe(res=>{
      //   //console.log("result "+ res);
      //   this.user = res;
      //   console.log(this.user.name);
      // },err=>{
      //   console.log("Error"+err);
      // })
    }

  get f(){
    return this.roomService.form.controls;
  }

  onClose() {
    this.roomService.form.reset();
    //this.roomService.initializeFormGroup();
    this.dialogRef.close();
    this.roomService.filter('');
  }

  onClear() {
    this.roomService.form.reset();
   // this.roomService.initializeFormGroup();
  }

  onSubmit() {
    var roomDetails = new Room;
    roomDetails.id = this.roomService.form.value['id'];
    roomDetails.roomNo = this.roomService.form.value['roomNo'];

    roomDetails.student1 = this.roomService.form.value['student1'];
    this.studentService.getStudentByRegNo(roomDetails.student1).subscribe(
      res => {
        console.log(res.name);
        roomDetails.stu1Name = res.name;
        console.log(roomDetails.stu1Name);
      }
    );
    roomDetails.stu1FromDate = this.roomService.form.value['stu1FromDate'];
    roomDetails.stu1LeaveDate = this.roomService.form.value['stu1LeaveDate'];

    roomDetails.student2 = this.roomService.form.value['student2'];
    roomDetails.stu2FromDate = this.roomService.form.value['stu2FromDate'];
    roomDetails.stu2LeaveDate = this.roomService.form.value['stu2LeaveDate'];

    roomDetails.student3 = this.roomService.form.value['student3'];
    roomDetails.stu3FromDate = this.roomService.form.value['stu3FromDate'];
    roomDetails.stu3LeaveDate = this.roomService.form.value['stu3LeaveDate'];

    roomDetails.student4 = this.roomService.form.value['student4'];
    roomDetails.stu4FromDate = this.roomService.form.value['stu4FromDate'];
    roomDetails.stu4LeaveDate = this.roomService.form.value['stu4LeaveDate'];

    //roomDetails.updatedBy = this.user.name;


    this.studentService.getStudentByRegNo(roomDetails.student2).subscribe(
      res => {
        roomDetails.stu1Name = res.name;
      }
    );
    this.studentService.getStudentByRegNo(roomDetails.student3).subscribe(
      res => {
        roomDetails.stu1Name = res.name;
      }
    );
    this.studentService.getStudentByRegNo(roomDetails.student4).subscribe(
      res => {
        roomDetails.stu1Name = res.name;
      }
    );

    this.roomService.updateRoom(roomDetails).subscribe(
      res => {
        this.roomService.form.reset();
       // this.roomService.initializeFormGroup();
        this.notification.success("Submitted Successfully")
        this.onClose();
      }
    )
  }

  update() {
    this.studentService.getStudentByRegNo(this.roomDetails.student1).subscribe(
      res => {
        console.log(res.name);
        this.roomDetails.stu1Name = res.name;
        console.log(this.roomDetails.stu1Name);
      }
    );
    this.studentService.getStudentByRegNo(this.roomDetails.student2).subscribe(
      res => {
        this.roomDetails.stu1Name = res.name;
      }
    );
    this.studentService.getStudentByRegNo(this.roomDetails.student3).subscribe(
      res => {
        this.roomDetails.stu1Name = res.name;
      }
    );
    this.studentService.getStudentByRegNo(this.roomDetails.student4).subscribe(
      res => {
        this.roomDetails.stu1Name = res.name;
      }
    );

    this.roomService.updateRoom(this.roomDetails).subscribe(
      res => {
        this.roomService.form.reset();
       // this.roomService.initializeFormGroup();
        this.notification.success("Submitted Successfully")
        this.onClose();
      }
    )

  }

  logout() {
   // localStorage.removeItem("token");
    this.route.navigate(['/staffLogin']);
  }

}
