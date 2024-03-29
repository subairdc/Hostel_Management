import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {MatCardModule} from '@angular/material/card';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDialogModule,MatDialogRef } from '@angular/material/dialog';
import {MatRadioModule} from '@angular/material/radio';
import {MatAutocompleteModule} from '@angular/material/autocomplete';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatCardModule,MatSidenavModule,MatListModule,MatFormFieldModule,MatInputModule,MatSelectModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    FormsModule,
    MatGridListModule,
    MatTableModule,MatSortModule,MatPaginatorModule,
    MatSnackBarModule,MatDialogModule,MatRadioModule,MatAutocompleteModule
  ],
  exports: [
    MatCardModule,MatSidenavModule,MatListModule,MatFormFieldModule,MatInputModule,MatSelectModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    FormsModule,
    MatGridListModule,MatTableModule,MatSortModule,MatPaginatorModule,
    MatSnackBarModule,MatDialogModule,MatRadioModule,MatAutocompleteModule
  ]
})
export class MaterialModule { }
