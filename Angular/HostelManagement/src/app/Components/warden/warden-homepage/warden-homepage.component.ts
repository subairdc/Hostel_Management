import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Warden } from 'src/app/model/warden';
import { WardenService } from 'src/app/service/warden.service';

@Component({
  selector: 'app-warden-homepage',
  templateUrl: './warden-homepage.component.html',
  styleUrls: ['./warden-homepage.component.css']
})
export class WardenHomepageComponent implements OnInit {

  id : number=0;
  user : Warden = new Warden();

  constructor(private router : Router, private route: ActivatedRoute, private wardenService : WardenService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getWarden();
  }

  private getWarden() {
    this.wardenService.getWardenById(this.id).subscribe(data => {
      this.user = data;
    })
  }

  logout() {
    localStorage.removeItem("token");
    this.router.navigate(['/wardenLogin']);
  }

}
