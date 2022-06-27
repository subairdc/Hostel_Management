import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Staff } from '../model/staff';

@Injectable({
  providedIn: 'root'
})
export class StaffService {

  addStaffURL : string;
  getStaffURL : string;
  updateStaffUrl : string;
  deleteStaffUrl : string;


  constructor(private http : HttpClient) {
    this.addStaffURL = 'http://localhost:8080/staff/addStaff';
    this.getStaffURL = 'http://localhost:8080/staff/getAll';
    this.updateStaffUrl = 'http://localhost:8080/staff/updateStaff';
    this.deleteStaffUrl = 'http://localhost:8080/staff/deleteStaffById';
   }


  addStaff(staff : Staff): Observable<Staff> {
    return this.http.post<Staff>(this.addStaffURL,staff);
  }

  getAllStaff(): Observable<Staff[]>{
    return this.http.get<Staff[]>(this.getStaffURL);
  }

  updateStaff(staff :Staff) : Observable<Staff>{
    return this.http.put<Staff>(this.updateStaffUrl, staff);
  }

  deleteStaff(staff : Staff) : Observable<Staff> {
    return this.http.delete<Staff>(this.deleteStaffUrl+'/'+staff.id);
  }
}
