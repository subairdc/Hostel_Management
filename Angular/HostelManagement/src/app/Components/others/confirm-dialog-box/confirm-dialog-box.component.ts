import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-dialog-box',
  templateUrl: './confirm-dialog-box.component.html',
  styleUrls: ['./confirm-dialog-box.component.css']
})
export class ConfirmDialogBoxComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ConfirmDialogBoxComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit(): void {
  }

  closeDialog() {
    this.dialogRef.close(false);
  }
}
