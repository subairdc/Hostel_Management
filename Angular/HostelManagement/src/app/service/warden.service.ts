import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Warden } from '../model/warden';

@Injectable({
  providedIn: 'root'
})
export class WardenService {

  addWardenURL : string;
  getWardenURL : string;
  updateWardenUrl : string;
  deleteWardenUrl : string;

  constructor(private http : HttpClient) {
    this.addWardenURL = 'http://localhost:8080/warden/addWarden';
    this.getWardenURL = 'http://localhost:8080/warden/getAll';
    this.updateWardenUrl = 'http://localhost:8080/warden/updateWarden';
    this.deleteWardenUrl = 'http://localhost:8080/warden/deleteWardenById';
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
}

