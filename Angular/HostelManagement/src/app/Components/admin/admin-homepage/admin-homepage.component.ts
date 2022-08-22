import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Admin } from 'src/app/model/admin';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-admin-homepage',
  templateUrl: './admin-homepage.component.html',
  styleUrls: ['./admin-homepage.component.css']
})
export class AdminHomepageComponent implements OnInit {

  id : number=0;
  user : Admin = new Admin();

  toggleNav(nav : any) {
    if(nav.opened) {
      nav.close();
    } else {
      nav.open();
    }
  }

  opened = true;

  constructor(private router : Router, private route: ActivatedRoute, private adminService : AdminService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getUser();
  }

  private getUser() {
    this.adminService.getAdminById(this.id).subscribe(data => {
      this.user = data;
    })
  }

  logout() {
    localStorage.removeItem("token");
    this.router.navigate(['/adminLogin']);
  }


}
