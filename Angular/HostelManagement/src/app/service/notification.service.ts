import { Injectable } from '@angular/core';
import { MatSnackBar,MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {


  constructor(private _snackBar: MatSnackBar) { }

  config : MatSnackBarConfig = {
    duration : 3000,
    verticalPosition : 'top',
    horizontalPosition : 'center',
  }

  success(msg:string) {
    this.config['panelClass'] = ['notification', 'success'];
    this._snackBar.open(msg,'',this.config);
  }


  warn(msg : string) {
    this.config['panelClass'] = ['notification', 'warn'];
    this._snackBar.open(msg,'',this.config);
  }
}
