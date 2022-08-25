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
  getStaffByIdURL : string;
  getStaffByStaffIdURL : string;
  getAllStaffURL : string;
  updateStaffUrl : string;
  deleteStaffUrl : string;


  form !: FormGroup;


  constructor(private http : HttpClient, private formBuilder : FormBuilder) {

    this.form = this.formBuilder.group({
      id : [''],
      name : ['',[Validators.required,Validators.minLength(4),Validators.maxLength(25)]],
      gender : [''],
      dateOfBirth:['',Validators.required],
      age:[''],
      bloodGrp: [''],


      staffId : ['',[Validators.required,Validators.minLength(4),Validators.maxLength(12)]],
      email :['',[Validators.required, Validators.email]],
      phoneNo : ['',[Validators.required,Validators.minLength(10),Validators.maxLength(12)]],


      password: ['',[Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{7,}')]],
      confirmPassword: ['',[Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{7,}')]],

      status : [''],
      hostel : [''],

      street : ['',[Validators.required,Validators.minLength(5),Validators.maxLength(40)]],
      city : [''],
      district : [''],
      state : [''],
      pincode : ['',[Validators.required,Validators.minLength(6)]],

      image : [''],
      imagePath : [''],
      updatedBy : [''],
      updatedOn : [''],
      dateOfEnrollment : ['']
  },
  {
    validators: this.confirmingPassword("password", "confirmPassword")
  }
  );

    this.addStaffURL = 'http://localhost:8080/staff/addStaff';
    this.getStaffURL = 'http://localhost:8080/staff/getStaff';
    this.getStaffByIdURL = 'http://localhost:8080/staff/getStaffById';
    this.getStaffByStaffIdURL = 'http://localhost:8080/staff/getStaffByStaffId';
    this.getAllStaffURL = 'http://localhost:8080/staff/getAllStaff';
    this.updateStaffUrl = 'http://localhost:8080/staff/updateStaff';
    this.deleteStaffUrl = 'http://localhost:8080/staff/deleteStaffById';
   }


   ngOnInit(): void {
  }

  initializeFormGroup() {
    this.form.setValue({
      id : 0,
      name : '',
      gender : '',
      dateOfBirth:'',
      age:'',
      bloodGrp: '',

      staffId : '',
      phoneNo : '',
      email :'',

      password: '',
      confirmPassword: '',

      status : '',
      hostel : '',

      street : '',
      city : '',
      district : '',
      state : '',
      pincode : '',

      image : '',
      imagePath : '',
      updatedBy : '',
      updatedOn : '',
      dateOfEnrollment : ''
    });
  }

  confirmingPassword(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      let control = formGroup.controls[controlName];
      let matchingControl = formGroup.controls[matchingControlName]
      if (matchingControl.errors && !matchingControl.errors['confirmingPassword']) {
        return;
      }
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ confirmingPassword: true });
      } else {
        matchingControl.setErrors(null);
      }
  }
}

  populateForm(staff : Staff) {
    this.form.setValue(staff);
  }

  addStaff(staff : Staff): Observable<Staff> {
    return this.http.post<Staff>(this.addStaffURL,staff);
  }

  //Passing whole class
  getStaff(staff : Staff) : Observable<Staff> {
    return this.http.get<Staff>(this.getStaffURL+'/'+staff.id);
  }
  //passing only id
  getStaffById(id : number) : Observable<Staff> {
    return this.http.get<Staff>(this.getStaffByIdURL+'/'+id);
  }

  //passing only id staffId string
  getStaffByStaffId(id : string) : Observable<Staff> {
    return this.http.get<Staff>(this.getStaffByStaffIdURL+'/'+id);
  }


  getAllStaff(): Observable<Staff[]>{
    return this.http.get<Staff[]>(this.getAllStaffURL);
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
