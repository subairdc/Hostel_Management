import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { Staff } from '../model/staff';

@Injectable({
  providedIn: 'root'
})
export class StaffService {

  addStaffURL : string;
  getStaffURL : string;
  updateStaffUrl : string;
  deleteStaffUrl : string;


  staffForm !: FormGroup;


  constructor(private http : HttpClient, private formBuilder : FormBuilder) {

    this.staffForm = this.formBuilder.group({
      id : [''],
      name : ['',[Validators.required,Validators.minLength(4),Validators.maxLength(25)]],
      email :['',[Validators.required, Validators.email]],
    password: ['',[Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{7,}')]]
    });

    this.addStaffURL = 'http://localhost:8080/staff/addStaff';
    this.getStaffURL = 'http://localhost:8080/staff/getAll';
    this.updateStaffUrl = 'http://localhost:8080/staff/updateStaff';
    this.deleteStaffUrl = 'http://localhost:8080/staff/deleteStaffById';
   }


   ngOnInit(): void {
  }

  initializeFormGroup() {
    this.staffForm.setValue({
      id : 0,
      name :'',
      email : '',
      password : ''
    });
  }

  populateForm(staff : Staff) {
    this.staffForm.setValue(staff);
  }

  addStaff(staff : Staff): Observable<Staff> {
    return this.http.post<Staff>(this.addStaffURL,staff);
  }

  getAllStaff(): Observable<Staff[]>{
    return this.http.get<Staff[]>(this.getStaffURL);
  }

  updateStaff(staff :Staff) : Observable<Staff>{
    return this.http.put<Staff>(this.updateStaffUrl, staff);
  }

  deleteStaff(staff : Staff) : Observable<Staff> {
    return this.http.delete<Staff>(this.deleteStaffUrl+'/'+staff.id);
  }


  //Refresh grid Database
  private _listeners = new Subject<any>();
  listen() : Observable<any> {
    return this._listeners.asObservable();
  }

  filter(filter : string) {
    this._listeners.next(filter);
  }
}
