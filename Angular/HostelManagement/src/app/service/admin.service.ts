import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from '../model/admin';

@Injectable({
  providedIn: 'root'
})
export class AdminService {


  addAdminURL : string;
  getAdminURL : string;
  updateAdminUrl : string;
  deleteAdminUrl : string;


  constructor(private http : HttpClient) {
    this.addAdminURL = 'http://localhost:8080/staff/addAdmin';
    this.getAdminURL = 'http://localhost:8080/staff/getAll';
    this.updateAdminUrl = 'http://localhost:8080/staff/updateAdmin';
    this.deleteAdminUrl = 'http://localhost:8080/staff/deleteAdminById';
   }


  addAdmin(admin : Admin): Observable<Admin> {
    return this.http.post<Admin>(this.addAdminURL,admin);
  }

  getAllAdmin(): Observable<Admin[]>{
    return this.http.get<Admin[]>(this.getAdminURL);
  }

  updateAdmin(admin :Admin) : Observable<Admin>{
    return this.http.put<Admin>(this.updateAdminUrl, admin);
  }

  deleteAdmin(admin : Admin) : Observable<Admin> {
    return this.http.delete<Admin>(this.deleteAdminUrl+'/'+admin.id);
  }
}
