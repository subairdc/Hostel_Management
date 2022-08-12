import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Student } from 'src/app/model/student';
import { StudentService } from 'src/app/service/student.service';

@Component({
  selector: 'app-student-homepage',
  templateUrl: './student-homepage.component.html',
  styleUrls: ['./student-homepage.component.css']
})
export class StudentHomepageComponent implements OnInit {

  id : number=0;
  user : Student = new Student();

  constructor(private router : Router, private route: ActivatedRoute, private studentService : StudentService) { }

  toggleNav(nav : any) {
    if(nav.opened) {
      nav.close();
    } else {
      nav.open();
    }
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getStudent();
  }

  private getStudent() {
    this.studentService.getStudentById(this.id).subscribe(data => {
      this.user = data;
    })
  }

  profile() {
    this.router.navigate(['studentHomepage/'+this.id+'/studentProfile',this.id]);
  }

  leaveForm() {
    this.router.navigate(['studentHomepage/'+this.id+'/leaveForm',this.id]);
  }

  logout() {
    localStorage.removeItem("token");
    this.router.navigate(['/studentLogin']);
  }

}
