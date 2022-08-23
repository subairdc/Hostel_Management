import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Staff } from 'src/app/model/staff';
import { StaffService } from 'src/app/service/staff.service';

@Component({
  selector: 'app-staff-homepage',
  templateUrl: './staff-homepage.component.html',
  styleUrls: ['./staff-homepage.component.css']
})
export class StaffHomepageComponent implements OnInit {

  id : number=0;
  user : Staff = new Staff();

  constructor(private router : Router, private route: ActivatedRoute, public staffService : StaffService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getStaff();
  }

  private getStaff() {
    this.staffService.getStaffById(this.id).subscribe(data => {
      this.user = data;
    })
  }

  logout() {
    localStorage.removeItem("token");
    this.router.navigate(['/staffLogin']);
  }


}
