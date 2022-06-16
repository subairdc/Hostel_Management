import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-warden-dashboard',
  templateUrl: './warden-dashboard.component.html',
  styleUrls: ['./warden-dashboard.component.css']
})
export class WardenDashboardComponent implements OnInit {

  constructor(private route : Router) { }

  ngOnInit(): void {

  }

  logout() {
    this.route.navigate(['/wardenLogin']);
  }

}
