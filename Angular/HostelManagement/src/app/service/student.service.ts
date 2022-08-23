import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { Student } from '../model/student';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  addStudentURL : string;
  getStudentURL : string;
  getStudentByIdURL : string;
  getStudentByRegNoURL : string;
  getAllStudentsURL : string;
  updateStudentURL : string;
  deleteStudentURL : string;

  getStudentMaxOrderURL : string;

  form !: FormGroup;

  maxOrderNo : number =0;

  constructor(private http : HttpClient, private formBuilder : FormBuilder) {

    this.form = this.formBuilder.group({
      id : [''],
      orderNo : [''],
      name : ['',[Validators.required,Validators.minLength(4),Validators.maxLength(25)]],
      email :['',[Validators.required, Validators.email]],
      gender : [''],
      dateOfBirth:['',Validators.required],
      age:[''],
      bloodGrp: [''],

      degree : [''],
      dept : [''],
      regNo : ['',[Validators.required,Validators.minLength(12),Validators.maxLength(12)]],
      year : [''],
      sem : [''],

      password: ['',[Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{7,}')]],
      confirmPassword: ['',[Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{7,}')]],

      status : [''],
      hostel : [''],

      roomNo :[''],

      street : ['',[Validators.required,Validators.minLength(5),Validators.maxLength(40)]],
      city : [''],
      district : [''],
      state : [''],
      pincode : ['',[Validators.required,Validators.minLength(6)]],

      fatherName : ['',[Validators.required,Validators.minLength(4),Validators.maxLength(25)]],
      fatherPhoneNo : ['',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
      motherName : ['',[Validators.required,Validators.minLength(4),Validators.maxLength(25)]],
      motherPhoneNo : ['',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
      phoneNo : ['',[Validators.required,Validators.minLength(10),Validators.maxLength(12)]],

      guardianName : [''],
      guardianPhoneNo : [''],
      guardianRelation : [''],
      guardianAddress : [''],

      image : [''],
      imagePath : [''],
      updatedBy : [''],
      updatedOn : [''],
  },
  {
    validators: this.confirmingPassword("password", "confirmPassword")
  }
  );

    this.addStudentURL = 'http://localhost:8080/student/addStudent';
    this.getStudentURL = 'http://localhost:8080/student/getStudentById';
    this.getStudentByIdURL = 'http://localhost:8080/student/getStudentById'
    this.getStudentByRegNoURL = 'http://localhost:8080/student/getStudentByRegNo'
    this.getAllStudentsURL = 'http://localhost:8080/student/getAllStudents';
    this.updateStudentURL = 'http://localhost:8080/student/updateStudent';
    this.deleteStudentURL = 'http://localhost:8080/student/deleteStudentById';

    this.getStudentMaxOrderURL = 'http://localhost:8080/student/getMaxOrder'

  }

  initializeFormGroup() {
    this.form.setValue({
      id : 0,
      orderNo : this.maxOrderNo,
      name : '',
      email :'',
      gender : '',
      dateOfBirth:'',
      age:'',
      bloodGrp: '',

      degree : '',
      dept : '',
      regNo : '',
      year : '',
      sem : '',

      password: '',
      confirmPassword: '',

      status : '',
      hostel : '',

      roomNo: '',

      street : '',
      city : '',
      district : '',
      state : '',
      pincode : '',

      fatherName : '',
      fatherPhoneNo : '',
      motherName : '',
      motherPhoneNo :'',
      phoneNo : '',

      guardianName : '',
      guardianPhoneNo : '',
      guardianRelation : '',
      guardianAddress : '',

      image : '',
      imagePath : '',
      updatedBy : '',
      updatedOn : ''
    });
  }

  confirmingPassword(controlName: string, matchingControlName: string) {
      return (formGroup: FormGroup) => {
        let control = formGroup.controls[controlName];
        let matchingControl = formGroup.controls[matchingControlName]
        if (matchingControl.errors && !matchingControl.errors['confirmingPassword']) {
          return;
        }
        if (control.value !== matchingControl.value) {
          matchingControl.setErrors({ confirmingPassword: true });
        } else {
          matchingControl.setErrors(null);
        }
    }
  }

  populateForm(student : Student) {
    this.form.setValue(student);
  }

  addStudent(student : Student): Observable<Student> {
    return this.http.post<Student>(this.addStudentURL,student);
  }
  //Passing whole class
  getStudent(student : Student) : Observable<Student> {
    return this.http.get<Student>(this.getStudentURL+'/'+student.id);
  }
  //passing only id
  getStudentById(id : number) : Observable<Student> {
    return this.http.get<Student>(this.getStudentByIdURL+'/'+id);
  }

  //passing only id regNo string
  getStudentByRegNo(id : string) : Observable<Student> {
    return this.http.get<Student>(this.getStudentByRegNoURL+'/'+id);
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

  getMaxOrderNo(): Observable<Student> {
    return this.http.get<Student>(this.getStudentMaxOrderURL);
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
