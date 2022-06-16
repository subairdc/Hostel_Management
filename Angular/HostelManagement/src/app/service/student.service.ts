import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Student } from '../model/student';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  addStudentURL : string;
  getStudentURL : string;
  updateStudentUrl : string;
  deleteStudentUrl : string;

  constructor(private http : HttpClient) {
    this.addStudentURL = 'http://localhost:8080/student/addStudent';
    this.getStudentURL = 'http://localhost:8080/student/getAll';
    this.updateStudentUrl = 'http://localhost:8080/student/updateStudent';
    this.deleteStudentUrl = 'http://localhost:8080/student/deleteStudentById';

  }

  addStudent(student : Student): Observable<Student> {
    return this.http.post<Student>(this.addStudentURL,student);
  }

  getAllStudent(): Observable<Student[]>{
    return this.http.get<Student[]>(this.getStudentURL);
  }

  updateStudent(student :Student) : Observable<Student>{
    return this.http.put<Student>(this.updateStudentUrl, student);
  }

  deleteStudent(student : Student) : Observable<Student> {
    return this.http.delete<Student>(this.deleteStudentUrl+'/'+student.email);
  }
}
