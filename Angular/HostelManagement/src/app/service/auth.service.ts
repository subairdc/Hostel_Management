import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Staff } from '../model/staff';
import { Student } from '../model/student';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  staffLoginUrl : string = '';
  staffSignUpUrl : string = '';

  studentLoginUrl : string = '';
  studentSignUpUrl : string = '';

  wardenLoginUrl : string = '';
  wardenSignUpUrl : string = '';

  adminLoginUrl : string = '';
  adminSignUpUrl : string = '';

  constructor(private http : HttpClient) {
    this.staffLoginUrl = "http://localhost:8080/auth/staffLogin";
    this.staffSignUpUrl = "http://localhost:8080/auth/staffRegister";

    this.studentLoginUrl = "http://localhost:8080/auth/studentLogin";
    this.studentSignUpUrl = "http://localhost:8080/auth/studentRegister";

    this.wardenLoginUrl = "http://localhost:8080/auth/wardenLogin";
    this.wardenSignUpUrl = "http://localhost:8080/auth/wardenRegister";

    this.adminLoginUrl = "http://localhost:8080/auth/adminLogin";
    this.adminSignUpUrl = "http://localhost:8080/auth/adminRegister";
  }

  staffLogin(user : any) : Observable<any> {
    return this.http.post<any>(this.staffLoginUrl,user);
  }

  staffSignup(user : any) : Observable<any> {
    return this.http.post<any>(this.staffSignUpUrl,user);
  }

  studentLogin(user : any) : Observable<any> {
    return this.http.post<any>(this.studentLoginUrl,user);
  }

  studentSignup(user : any) : Observable<any> {
    return this.http.post<any>(this.studentSignUpUrl,user);
  }

  wardenLogin(user : any) : Observable<any> {
    return this.http.post<any>(this.wardenLoginUrl,user);
  }

  wardenSignup(user : any) : Observable<any> {
    return this.http.post<any>(this.wardenSignUpUrl,user);
  }

  adminLogin(user : any) : Observable<any> {
    return this.http.post<any>(this.adminLoginUrl,user);
  }

  adminSignup(user : any) : Observable<any> {
    return this.http.post<any>(this.adminSignUpUrl,user);
  }
}
