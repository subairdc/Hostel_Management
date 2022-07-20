import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-staff-homepage',
  templateUrl: './staff-homepage.component.html',
  styleUrls: ['./staff-homepage.component.css']
})
export class StaffHomepageComponent implements OnInit {

  constructor(private route : Router) { }

  ngOnInit(): void {
  }

  logout() {
    localStorage.removeItem("token");
    this.route.navigate(['/staffLogin']);
  }


}
