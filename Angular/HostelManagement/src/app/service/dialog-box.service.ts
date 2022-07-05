import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogBoxComponent } from '../Components/others/confirm-dialog-box/confirm-dialog-box.component';

@Injectable({
  providedIn: 'root'
})
export class DialogBoxService {

  constructor(private dialog : MatDialog) { }

  openConfirmDialog(msg:any) {
    return this.dialog.open(ConfirmDialogBoxComponent,{
      width :'200px',
      panelClass: 'confirm-dialog-container',
      disableClose: true,
      position: {top:"45px"},
      data: {
        msg : msg
      }
    });
  }
}
