import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from 'src/app/model/student';
import { StudentService } from 'src/app/service/student.service';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.css']
})
export class StudentDashboardComponent implements OnInit {

  id : number=0;
  user : Student = new Student();

  constructor(private router : Router, private route: ActivatedRoute, private studentService : StudentService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getStudent();
  }

  private getStudent() {
    this.studentService.getStudentById(this.id).subscribe(data => {
      this.user = data;
    })
  }

  logout() {
    this.router.navigate(['/studentLogin']);
  }

}
