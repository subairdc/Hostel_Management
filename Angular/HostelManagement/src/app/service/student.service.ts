import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Student } from '../model/student';
import { Observable } from 'rxjs';
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

  constructor(private http : HttpClient) {
    this.addStudentURL = 'http://localhost:8080/student/addStudent';
    this.getStudentURL = 'http://localhost:8080/student/getStudentById';
    this.getAllStudentsURL = 'http://localhost:8080/student/getAllStudents';
    this.updateStudentURL = 'http://localhost:8080/student/updateStudent';
    this.deleteStudentURL = 'http://localhost:8080/student/deleteStudentById';

    this.addLeaveFormURL = 'http://localhost:8080/student/addLeaveForm';

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
}
