import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { Room } from '../model/room';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  addRoomURL : string;
  getAllRoomsURL : string;
  updateRoomURL : string;
  deleteRoomURL : string;

  form !: FormGroup;

  constructor(private http : HttpClient, private formBuilder : FormBuilder) {
    this.form = this.formBuilder.group({
      id : [''],
      roomNo : [''],
      student1 : ['',[Validators.required,Validators.maxLength(12),Validators.minLength(12)]],
      stu1Name : [''],
      stu1FromDate :[''],
      stu1LeaveDate : [''],

      student2 : ['',[Validators.required,Validators.maxLength(12),Validators.minLength(12)]],
      stu2Name : [''],
      stu2FromDate :[''],
      stu2LeaveDate : [''],

      student3 : ['',[Validators.required,Validators.maxLength(12),Validators.minLength(12)]],
      stu3Name : [''],
      stu3FromDate :[''],
      stu3LeaveDate : [''],

      student4 : ['',[Validators.required,Validators.maxLength(12),Validators.minLength(12)]],
      stu4Name : [''],
      stu4FromDate :[''],
      stu4LeaveDate : [''],

      updatedBy : ['']
    });

    this.addRoomURL = 'http://localhost:8080/room/addRoom';
    this.getAllRoomsURL = 'http://localhost:8080/room/getAllRooms';
    this.updateRoomURL = 'http://localhost:8080/room/updateRoom';
    this.deleteRoomURL = 'http://localhost:8080/room/deleteRoom';
  }

  populateForm(room : Room) {
    this.form.setValue(room);
  }

  addRoom(room : Room): Observable<Room> {
    return this.http.post<Room>(this.addRoomURL,room);
  }

  getAllRooms(): Observable<Room[]>{
    return this.http.get<Room[]>(this.getAllRoomsURL);
  }

  updateRoom(room :Room) : Observable<Room>{
    return this.http.put<Room>(this.updateRoomURL, room);
  }

  deleteRoom(room : Room) : Observable<Room> {
    return this.http.delete<Room>(this.deleteRoomURL+'/'+room.id);
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
