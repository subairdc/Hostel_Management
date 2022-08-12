import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from 'src/app/service/student.service';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.css']
})
export class StudentDashboardComponent implements OnInit {

  constructor(private route : Router, public studentService : StudentService) { }

  ngOnInit(): void {
  }

  logout() {
    this.route.navigate(['/studentLogin']);
  }

}
