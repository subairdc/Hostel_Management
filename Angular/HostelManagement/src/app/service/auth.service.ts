import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
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

  //forget Email and password
  stuForgetPasswordURL : string = '';
  stuForgetEmailURL : string = '';

  staffForgetPasswordURL : string = '';
  staffForgetEmailURL : string = '';

  wardenForgetPasswordURL : string = '';
  wardenForgetEmailURL : string = '';

  adminForgetPasswordURL : string = '';
  adminForgetEmailURL : string = '';

  constructor(private http : HttpClient) {
    this.staffLoginUrl = "http://localhost:8080/auth/staffLogin";
    this.staffSignUpUrl = "http://localhost:8080/auth/staffRegister";

    this.studentLoginUrl = "http://localhost:8080/auth/studentLogin";
    this.studentSignUpUrl = "http://localhost:8080/auth/studentRegister";

    this.wardenLoginUrl = "http://localhost:8080/auth/wardenLogin";
    this.wardenSignUpUrl = "http://localhost:8080/auth/wardenRegister";

    this.adminLoginUrl = "http://localhost:8080/auth/adminLogin";
    this.adminSignUpUrl = "http://localhost:8080/auth/adminRegister";

    //forget Email and password
    this.stuForgetPasswordURL = "http://localhost:8080/auth/stuForgetPassword";
    this.stuForgetEmailURL = "http://localhost:8080/auth/stuForgetEmail";

    this.staffForgetPasswordURL = "http://localhost:8080/auth/staffForgetPassword";
    this.staffForgetEmailURL = "http://localhost:8080/auth/staffForgetEmail";

    this.wardenForgetPasswordURL = "http://localhost:8080/auth/wardenForgetPassword";
    this.wardenForgetEmailURL = "http://localhost:8080/auth/wardenForgetEmail";

    this.adminForgetPasswordURL = "http://localhost:8080/auth/adminForgetPassword";
    this.adminForgetEmailURL = "http://localhost:8080/auth/adminForgetEmail";

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

  // getStudentById(id : number) : Observable<Student> {
  //   return this.http.get<Student>(this.getStudentByIdURL+'/'+id);
  // }
  //forget Email and password
  studentPassword(user : any) : Observable<any> {
    return this.http.post<any>(this.stuForgetPasswordURL,user);
  }

  studentEmail(user : any) : Observable<any> {
    return this.http.post<any>(this.stuForgetEmailURL,user);
  }

  staffPassword(user : any) : Observable<any> {
    return this.http.get<any>(this.staffForgetPasswordURL,user.password);
  }

  staffEmail(user : any) : Observable<any> {
    return this.http.get<any>(this.staffForgetEmailURL,user.email);
  }

  wardenPassword(user : any) : Observable<any> {
    return this.http.get<any>(this.wardenForgetPasswordURL,user.password);
  }

  wardenEmail(user : any) : Observable<any> {
    return this.http.get<any>(this.wardenForgetEmailURL,user.email);
  }

  adminPassword(user : any) : Observable<any> {
    return this.http.get<any>(this.adminForgetPasswordURL,user.password);
  }

  adminEmail(user : any) : Observable<any> {
    return this.http.get<any>(this.adminForgetEmailURL,user.email);
  }
}
