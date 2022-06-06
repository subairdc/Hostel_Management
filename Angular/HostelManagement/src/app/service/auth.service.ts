import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Staff } from '../model/staff';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loginUrl : string = '';
  signUpUrl : string = '';

  constructor(private http : HttpClient) {
    this.loginUrl = "http://localhost:8080/auth/login";
    this.signUpUrl = "http://localhost:8080/auth/register";
  }

  login(user : Staff) : Observable<any> {
    return this.http.post<any>(this.loginUrl,user);
  }

  signUp(user : Staff) : Observable<any> {
    return this.http.post<any>(this.signUpUrl,user);
  }
}
