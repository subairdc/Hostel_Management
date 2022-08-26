import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { LeaveForm } from '../model/leave-form';

@Injectable({
  providedIn: 'root'
})
export class LeaveFormService {

  form !: FormGroup;

  addLeaveURL : string;
  updateLeaveURL : string;
  getLeaveURL : string;
  getLeaveByIdURL : string;
  getLeaveByRegNoURL : string;
  getAllLeaveURL : string;
  deleteLeaveURL : string;

  // addLeaveFormURL : string;
  // addLeaveForm2URL : string;
  // updateLeaveForm2URL : string;
  // getLeaveForm2URL : string;
  // getLeaveForm2ByIdURL : string;
  // getLeaveForm2ByRegNoURL : string;
  // getAllLeaveForm2URL : string;
  // deleteLeaveForm2URL : string;

  constructor(private http : HttpClient, private formBuilder : FormBuilder) {

    this.form = this.formBuilder.group({
      id: [''],
      name : [''],
      regNo: [''],
      phoneNo: [''],
      roomNo: [''],
      hostel: [''],

      degree: [''],
      dept: [''],
      year: [''],
      sem: [''],

      leaveCategory: [''],

      date: [''],
      day: [''],
      leavingTime: [''],
      reportingTime: [''],
      leavePurpose: [''],

      fromDate: [''],
      toDate: [''],
      noOfDays: [''],

      contactPerson: [''],
      personName: [''],
      relation: [''],
      contactPhoneNo: [''],

      parent : [''],
      staff: [''],
      warden: [''],
      remark : [''],
      leaveStatus: ['']
    });

    this.addLeaveURL = 'http://localhost:8080/leaveForm/addLeave';
    this.updateLeaveURL = 'http://localhost:8080/leaveForm/updateLeave';
    this.getLeaveURL = 'http://localhost:8080/leaveForm/getLeave';
    this.getLeaveByIdURL = 'http://localhost:8080/leaveForm/getLeaveById';
    this.getLeaveByRegNoURL = 'http://localhost:8080/leaveForm/getLeaveByRegNo';
    this.getAllLeaveURL = 'http://localhost:8080/leaveForm/getAllLeave';
    this.deleteLeaveURL = 'http://localhost:8080/leaveForm/deleteLeave';


    // this.addLeaveFormURL = 'http://localhost:8080/leaveForm/addLeaveForm';
    // this.addLeaveForm2URL = 'http://localhost:8080/leaveForm/addLeaveForm2';
    // this.updateLeaveForm2URL = 'http://localhost:8080/leaveForm/updateLeaveForm2';
    // this.getLeaveForm2URL = 'http://localhost:8080/leaveForm/getLeaveForm2';
    // this.getLeaveForm2ByIdURL = 'http://localhost:8080/leaveForm/getLeaveForm2ById';
    // this.getLeaveForm2ByRegNoURL = 'http://localhost:8080/leaveForm/getLeaveForm2ByRegNo';
    // this.getAllLeaveForm2URL = 'http://localhost:8080/leaveForm/getAllLeaveForm2';
    // this.deleteLeaveForm2URL = 'http://localhost:8080/leaveForm/deleteLeaveForm2';
  }

  ngOnInit(): void {
  }

  initializeFormGroup() {
    this.form.setValue({
      id : 0,
      name : '',
      regNo: '',
      phoneNo: '',
      roomNo: 0,
      hostel: '',

      degree: '',
      dept: '',
      year: '',
      sem: '',

      leaveCategory: '',

      date: '',
      day: '',
      leavingTime: '',
      reportingTime: '',
      leavePurpose: '',

      fromDate: '',
      toDate: '',
      noOfDays: 0,

      contactPerson: '',
      personName: '',
      relation: '',
      contactPhoneNo: '',

      parent : '',
      staff: '',
      warden: '',
      remark : '',
      leaveStatus : '',
    });
  }

  populateForm(leaveForm : LeaveForm) {
    this.form.setValue(leaveForm);
  }

 addLeave(leaveForm : LeaveForm) : Observable<LeaveForm> {
    return this.http.post<LeaveForm>(this.addLeaveURL,leaveForm);
  }

  //Passing whole class
  getLeave(leaveForm : LeaveForm) : Observable<LeaveForm>{
    return this.http.get<LeaveForm>(this.getLeaveURL+'/'+leaveForm.id);
  }
  //passing only id
  getLeaveById(id : number) : Observable<LeaveForm> {
    return this.http.get<LeaveForm>(this.getLeaveByIdURL+'/'+id);
  }

  //passing only id regNo string
  getLeaveByRegNo(id : string) : Observable<any> {
    return this.http.get<any>(this.getLeaveByRegNoURL+'/'+id);
  }


  getAllLeave(): Observable<LeaveForm[]>{
    return this.http.get<LeaveForm[]>(this.getAllLeaveURL);
  }

  updateLeave(leaveForm :LeaveForm) : Observable<LeaveForm>{
    return this.http.put<LeaveForm>(this.updateLeaveURL, leaveForm);
  }

  deleteLeave(leaveForm : LeaveForm) : Observable<LeaveForm> {
    return this.http.delete<LeaveForm>(this.deleteLeaveURL+'/'+leaveForm.id);
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
