import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-warden-homepage',
  templateUrl: './warden-homepage.component.html',
  styleUrls: ['./warden-homepage.component.css']
})
export class WardenHomepageComponent implements OnInit {

  constructor(private route : Router) { }

  ngOnInit(): void {
  }

  logout() {
    localStorage.removeItem("token");
    this.route.navigate(['/wardenLogin']);
  }

}
