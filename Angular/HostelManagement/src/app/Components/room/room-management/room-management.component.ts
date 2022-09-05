import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Route, Router } from '@angular/router';
import { DialogBoxService } from 'src/app/service/dialog-box.service';
import { NotificationService } from 'src/app/service/notification.service';
import { RoomService } from 'src/app/service/room.service';
import { RoomDetailsComponent } from '../room-details/room-details.component';

@Component({
  selector: 'app-room-management',
  templateUrl: './room-management.component.html',
  styleUrls: ['./room-management.component.css']
})
export class RoomManagementComponent implements OnInit {

  girdListData : any;
  displayedColumns : string[] = ['id', 'roomNo', 'student1', 'student2', 'student3', 'student4', 'action'];
  searchKey : string="";

  @ViewChild(MatSort) sort: any = MatSort;
  @ViewChild(MatPaginator) paginator : any = MatPaginator; //optional


  constructor(private route : Router, private formBuilder : FormBuilder, private roomService : RoomService,
     private _notification : NotificationService, private _dialog : MatDialog, private dialogService : DialogBoxService) {

      this.roomService.listen().subscribe((m:any)=> {
        this.fillGird();
      })
     }

  ngOnInit(): void {
    this.fillGird();
  }

  fillGird() {
    this.roomService.getAllRooms().subscribe(
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
    dialogConfig.width ="30%";
    // dialogConfig.height = "70%";
    this._dialog.open(RoomDetailsComponent,dialogConfig);
  }

  onEdit(row:any) {
    this.roomService.populateForm(row);

    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose =true;
    dialogConfig.autoFocus = true;
    dialogConfig.width ="30%";
    this._dialog.open(RoomDetailsComponent,dialogConfig);
  }

  onDelete(row : any) {

    this.dialogService.openConfirmDialog('Would you like to delete ' + row.name + ' data?').afterClosed().subscribe(res=> {
      if(res) {
        this.roomService.deleteRoom(row).subscribe(data=> {
          this._notification.warn("Deleted Successfully");
          this.roomService.filter('');
        });
      }
    });
  }

}
