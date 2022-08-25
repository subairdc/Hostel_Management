import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { Warden } from '../model/warden';

@Injectable({
  providedIn: 'root'
})
export class WardenService {

  addWardenURL : string;
  getWardenURL : string;
  getWardenByIdURL : string;
  getWardenByWardenIdURL : string;
  getAllWardenURL : string;
  updateWardenUrl : string;
  deleteWardenUrl : string;

  form !: FormGroup;

  constructor(private http : HttpClient, private formBuilder : FormBuilder) {

    this.form = this.formBuilder.group({
      id : [''],
      name : ['',[Validators.required,Validators.minLength(4),Validators.maxLength(25)]],
      gender : [''],
      dateOfBirth:['',Validators.required],
      age:[''],
      bloodGrp: [''],


      wardenId : ['',[Validators.required,Validators.minLength(4),Validators.maxLength(12)]],
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


    this.addWardenURL = 'http://localhost:8080/warden/addWarden';
    this.getWardenURL = 'http://localhost:8080/warden/getWardenById';
    this.getWardenByIdURL = 'http://localhost:8080/warden/getWardenById'
    this.getWardenByWardenIdURL = 'http://localhost:8080/warden/getWardenByWardenId'
    this.getAllWardenURL = 'http://localhost:8080/warden/getAllWarden';
    this.updateWardenUrl = 'http://localhost:8080/warden/updateWarden';
    this.deleteWardenUrl = 'http://localhost:8080/warden/deleteWardenById';
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

      wardenId : '',
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

  populateForm(warden : Warden) {
    // let dateOfBirth: Date = new Date(warden.dateOfBirth);
    // warden.dateOfBirth=dateOfBirth;
    this.form.setValue(warden);
  }

  addWarden(warden : Warden): Observable<Warden> {
    return this.http.post<Warden>(this.addWardenURL,warden);
  }

  //Passing whole class
  getWarden(warden : Warden) : Observable<Warden> {
    return this.http.get<Warden>(this.getWardenURL+'/'+warden.id);
  }
  //passing only id
  getWardenById(id : number) : Observable<Warden> {
    return this.http.get<Warden>(this.getWardenByIdURL+'/'+id);
  }

  //passing only id regNo string
  getWardenByWardenId(id : string) : Observable<Warden> {
    return this.http.get<Warden>(this.getWardenByWardenIdURL+'/'+id);
  }

  getAllWarden(): Observable<Warden[]>{
    return this.http.get<Warden[]>(this.getAllWardenURL);
  }

  updateWarden(warden :Warden) : Observable<Warden>{
    return this.http.put<Warden>(this.updateWardenUrl, warden);
  }

  deleteWarden(warden : Warden) : Observable<Warden> {
    return this.http.delete<Warden>(this.deleteWardenUrl+'/'+warden.id);
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
