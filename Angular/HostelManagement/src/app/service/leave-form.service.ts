import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { LeaveForm } from '../model/leave-form';
import { LeaveForm2 } from '../model/leave-form2';

@Injectable({
  providedIn: 'root'
})
export class LeaveFormService {

  form !: FormGroup;

  addLeaveFormURL : string;
  addLeaveForm2URL : string;
  updateLeaveForm2URL : string;
  getLeaveForm2URL : string;
  getLeaveForm2ByIdURL : string;
  getLeaveForm2ByRegNoURL : string;
  getAllLeaveForm2URL : string;
  deleteLeaveForm2URL : string;

  constructor(private http : HttpClient, private formBuilder : FormBuilder) {

    this.form = this.formBuilder.group({
      id: [''],
      name : [''],
      regNo: [''],
      roomNo: [''],
      parent : [''],
      staff: [''],
      warden: [''],
      remark : [''],
      leaveStatus: ['']
    });

    this.addLeaveFormURL = 'http://localhost:8080/leaveForm/addLeaveForm';
    this.addLeaveForm2URL = 'http://localhost:8080/leaveForm/addLeaveForm2';
    this.updateLeaveForm2URL = 'http://localhost:8080/leaveForm/updateLeaveForm2';
    this.getLeaveForm2URL = 'http://localhost:8080/leaveForm/getLeaveForm2';
    this.getLeaveForm2ByIdURL = 'http://localhost:8080/leaveForm/getLeaveForm2ById';
    this.getLeaveForm2ByRegNoURL = 'http://localhost:8080/leaveForm/getLeaveForm2ByRegNo';
    this.getAllLeaveForm2URL = 'http://localhost:8080/leaveForm/getAllLeaveForm2';
    this.deleteLeaveForm2URL = 'http://localhost:8080/leaveForm/deleteLeaveForm2';
  }

  ngOnInit(): void {
  }

  initializeFormGroup() {
    this.form.setValue({
      id : 0,
      name :'',
      regNo : '',
      roomNo :0,
      parent : '',
      staff : '',
      warden : '',
      remark : '',
      leaveStatus : ''
    });
  }

  populateForm(leaveForm2 : LeaveForm2) {
    this.form.setValue(leaveForm2);
  }

 addLeaveForm(leaveForm : LeaveForm) : Observable<LeaveForm> {
    return this.http.post<LeaveForm>(this.addLeaveFormURL,leaveForm);
  }

  addLeaveForm2(leaveForm2 : LeaveForm2) : Observable<LeaveForm2> {
    return this.http.post<LeaveForm2>(this.addLeaveForm2URL,leaveForm2);
  }

  //Passing whole class
  getLeaveForm2(leaveForm2 : LeaveForm2) : Observable<LeaveForm2>{
    return this.http.get<LeaveForm2>(this.getLeaveForm2URL+'/'+leaveForm2.id);
  }
  //passing only id
  getLeaveForm2ById(id : number) : Observable<LeaveForm2> {
    return this.http.get<LeaveForm2>(this.getLeaveForm2ByIdURL+'/'+id);
  }

  //passing only id regNo string
  getLeaveForm2ByRegNo(id : string) : Observable<LeaveForm2> {
    return this.http.get<LeaveForm2>(this.getLeaveForm2ByRegNoURL+'/'+id);
  }


  getAllLeaveForm2(): Observable<LeaveForm2[]>{
    return this.http.get<LeaveForm2[]>(this.getAllLeaveForm2URL);
  }

  updateLeaveForm2(leaveForm2 :LeaveForm2) : Observable<LeaveForm2>{
    return this.http.put<LeaveForm2>(this.updateLeaveForm2URL, leaveForm2);
  }

  deleteLeaveForm2(leaveForm2 : LeaveForm2) : Observable<LeaveForm2> {
    return this.http.delete<LeaveForm2>(this.deleteLeaveForm2URL+'/'+leaveForm2.id);
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
