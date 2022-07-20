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
  updateWardenUrl : string;
  deleteWardenUrl : string;
  getWardenMaxOrderURL : string;

  form !: FormGroup;

  MaxOrderNo: number =0;

  constructor(private http : HttpClient, private formBuilder : FormBuilder) {

    this.form = this.formBuilder.group({
      id : [''],
      name : ['',[Validators.required,Validators.minLength(4),Validators.maxLength(25)]],
      email :['',[Validators.required, Validators.email]],
      password: ['',[Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{7,}')]],
      orderNo: [''],
      updatedBy: [''],
      updatedOn: ['']
  });

    this.addWardenURL = 'http://localhost:8080/warden/addWarden';
    this.getWardenURL = 'http://localhost:8080/warden/getAll';
    this.updateWardenUrl = 'http://localhost:8080/warden/updateWarden';
    this.deleteWardenUrl = 'http://localhost:8080/warden/deleteWardenById';
    this.getWardenMaxOrderURL = 'http://localhost:8080/warden/getMaxOrder';
   }

   ngOnInit(): void {
  }

  initializeFormGroup() {
    this.form.setValue({
      id : 0,
      name :'',
      email : '',
      password : '',
      orderNo : this.MaxOrderNo,
      updatedBy : '',
      updatedOn : ''
    });
  }

  populateForm(warden : Warden) {
    this.form.setValue(warden);
  }

  addWarden(warden : Warden): Observable<Warden> {
    return this.http.post<Warden>(this.addWardenURL,warden);
  }

  getAllWarden(): Observable<Warden[]>{
    return this.http.get<Warden[]>(this.getWardenURL);
  }

  updateWarden(warden :Warden) : Observable<Warden>{
    return this.http.put<Warden>(this.updateWardenUrl, warden);
  }

  deleteWarden(warden : Warden) : Observable<Warden> {
    return this.http.delete<Warden>(this.deleteWardenUrl+'/'+warden.id);
  }

  getMaxOrderNo(): Observable<Warden> {
    return this.http.get<Warden>(this.getWardenMaxOrderURL);
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
