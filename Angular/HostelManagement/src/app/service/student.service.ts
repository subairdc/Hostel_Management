import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { Student } from '../model/student';
import { Observable, Subject } from 'rxjs';
import { LeaveForm } from '../model/leave-form';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  addStudentURL : string;
  getStudentURL : string;
  getAllStudentsURL : string;
  updateStudentURL : string;
  deleteStudentURL : string;

  addLeaveFormURL : string;

  studentForm !: FormGroup;

  constructor(private http : HttpClient, private formBuilder : FormBuilder) {

    this.studentForm = this.formBuilder.group({
      id : [''],
      name : ['',[Validators.required,Validators.minLength(4),Validators.maxLength(25)]],
      email :['',[Validators.required, Validators.email]],
    password: ['',[Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{7,}')]],
    gender: ['']
  });

    this.addStudentURL = 'http://localhost:8080/student/addStudent';
    this.getStudentURL = 'http://localhost:8080/student/getStudentById';
    this.getAllStudentsURL = 'http://localhost:8080/student/getAllStudents';
    this.updateStudentURL = 'http://localhost:8080/student/updateStudent';
    this.deleteStudentURL = 'http://localhost:8080/student/deleteStudentById';

    this.addLeaveFormURL = 'http://localhost:8080/student/addLeaveForm';

  }

  initializeFormGroup() {
    this.studentForm.setValue({
      id : 0,
      name :'',
      email : '',
      password : '',
      gender : ''
    });
  }

  populateForm(student : Student) {
    this.studentForm.setValue(student);
  }


  addStudent(student : Student): Observable<Student> {
    return this.http.post<Student>(this.addStudentURL,student);
  }

  getStudent(student : Student) : Observable<Student> {
    return this.http.get<Student>(this.getStudentURL+'/'+student.id);
  }

  getAllStudents(): Observable<Student[]>{
    return this.http.get<Student[]>(this.getAllStudentsURL);
  }

  updateStudent(student :Student) : Observable<Student>{
    return this.http.put<Student>(this.updateStudentURL, student);
  }

  deleteStudent(student : Student) : Observable<Student> {
    return this.http.delete<Student>(this.deleteStudentURL+'/'+student.id);
  }


 addLeaveForm(leaveForm : LeaveForm) : Observable<LeaveForm> {
    return this.http.post<LeaveForm>(this.addLeaveFormURL,leaveForm);
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
