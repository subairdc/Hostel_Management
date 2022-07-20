import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-homepage',
  templateUrl: './student-homepage.component.html',
  styleUrls: ['./student-homepage.component.css']
})
export class StudentHomepageComponent implements OnInit {

  constructor(private route : Router) { }

  toggleNav(nav : any) {
    if(nav.opened) {
      nav.close();
    } else {
      nav.open();
    }
  }

  ngOnInit(): void {
  }

  logout() {
    localStorage.removeItem("token");
    this.route.navigate(['/studentLogin']);
  }

}
