import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { Admin } from '../model/admin';

@Injectable({
  providedIn: 'root'
})
export class AdminService {


  addAdminURL : string;
  getAllAdminURL : string;
  getAdminURL : string;
  getAdminByIdURL : string;
  getAdminByAdminIdURL : string;
  updateAdminUrl : string;
  deleteAdminUrl : string;

  form !: FormGroup;

  constructor(private http : HttpClient, private formBuilder : FormBuilder) {

    this.form = this.formBuilder.group({
      id : [''],
      name : ['',[Validators.required,Validators.minLength(4),Validators.maxLength(25)]],
      email :['',[Validators.required, Validators.email]],
    password: ['',[Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{7,}')]]
    });

    this.addAdminURL = 'http://localhost:8080/admin/addAdmin';
    this.getAllAdminURL = 'http://localhost:8080/admin/getAll';
    this.getAdminURL = 'http://localhost:8080/admin/getAdminById';
    this.getAdminByIdURL = 'http://localhost:8080/admin/getAdminById';
    this.getAdminByAdminIdURL = 'http://localhost:8080/admin/getAdminByAdminId';
    this.updateAdminUrl = 'http://localhost:8080/admin/updateAdmin';
    this.deleteAdminUrl = 'http://localhost:8080/admin/deleteAdminById';
   }

   ngOnInit(): void {
  }

  initializeFormGroup() {
    this.form.setValue({
      id : 0,
      name :'',
      email : '',
      password : ''
    });
  }

  populateForm(admin : Admin) {
    this.form.setValue(admin);
  }

  addAdmin(admin : Admin): Observable<Admin> {
    return this.http.post<Admin>(this.addAdminURL,admin);
  }

  getAllAdmin(): Observable<Admin[]>{
    return this.http.get<Admin[]>(this.getAllAdminURL);
  }

  //Passing whole class
  getAdmin(admin : Admin) : Observable<Admin> {
    return this.http.get<Admin>(this.getAdminURL+'/'+admin.id);
  }
  //passing only id
  getAdminById(id : number) : Observable<Admin> {
    return this.http.get<Admin>(this.getAdminByIdURL+'/'+id);
  }

  //passing only id AdminId string
  getAdminByAdminId(id : string) : Observable<Admin> {
    return this.http.get<Admin>(this.getAdminByAdminIdURL+'/'+id);
  }

  updateAdmin(admin :Admin) : Observable<Admin>{
    return this.http.put<Admin>(this.updateAdminUrl, admin);
  }

  deleteAdmin(admin : Admin) : Observable<Admin> {
    return this.http.delete<Admin>(this.deleteAdminUrl+'/'+admin.id);
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
