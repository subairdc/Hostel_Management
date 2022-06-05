import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-student-login',
  templateUrl: './student-login.component.html',
  styleUrls: ['./student-login.component.css']
})
export class StudentLoginComponent implements OnInit {

  login = new FormGroup({
    name: new FormControl("subiar",[Validators.required]),
    password: new FormControl(Validators.pattern("^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$")),
  });

  constructor() { }

  ngOnInit(): void {
  }

  getData(){
    console.log(this.login.value);
  }

  //Validation
  get name(){
    return this.login.get("name");
  }

  get password(){
    return this.login.get("password");
  }
}
