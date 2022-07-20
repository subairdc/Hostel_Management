import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './Components/admin/admin-dashboard/admin-dashboard.component';
import { AdminHomepageComponent } from './Components/admin/admin-homepage/admin-homepage.component';
import { AdminManagementComponent } from './Components/admin/admin-management/admin-management.component';
import { StaffManagementComponent } from './Components/admin/staff-management/staff-management.component';
import { WardenManagementComponent } from './Components/admin/warden-management/warden-management.component';
import { AdminLoginComponent } from './Components/login/admin-login/admin-login.component';
import { AdminSignupComponent } from './Components/login/admin-signup/admin-signup.component';
import { StaffLoginComponent } from './Components/login/staff-login/staff-login.component';
import { StaffSignupComponent } from './Components/login/staff-signup/staff-signup.component';
import { StudentLoginComponent } from './Components/login/student-login/student-login.component';
import { StudentSignupComponent } from './Components/login/student-signup/student-signup.component';
import { WardenLoginComponent } from './Components/login/warden-login/warden-login.component';
import { WardenSignupComponent } from './Components/login/warden-signup/warden-signup.component';
import { StaffDashboardComponent } from './Components/staff/staff-dashboard/staff-dashboard.component';
import { StaffDetailsComponent } from './Components/staff/staff-details/staff-details.component';
import { StaffHomepageComponent } from './Components/staff/staff-homepage/staff-homepage.component';
import { StudentManagementComponent } from './Components/staff/student-management/student-management.component';
import { LeaveFormComponent } from './Components/student/leave-form/leave-form.component';
import { StudentDashboardComponent } from './Components/student/student-dashboard/student-dashboard.component';
import { StudentHomepageComponent } from './Components/student/student-homepage/student-homepage.component';
import { StudentProfileComponent } from './Components/student/student-profile/student-profile.component';
import { WardenDashboardComponent } from './Components/warden/warden-dashboard/warden-dashboard.component';
import { WardenDetailsComponent } from './Components/warden/warden-details/warden-details.component';
import { WardenHomepageComponent } from './Components/warden/warden-homepage/warden-homepage.component';

const routes: Routes = [
  { path:'' , component: StudentLoginComponent },
  { path:'studentLogin' , component: StudentLoginComponent },
  { path:'adminLogin' , component: AdminLoginComponent },
  { path:'staffLogin' , component: StaffLoginComponent },
  { path:'wardenLogin' , component: WardenLoginComponent },

  { path:'studentSignup' , component: StudentSignupComponent },
  { path:'adminSignup' , component: AdminSignupComponent },
  { path:'staffSignup' , component: StaffSignupComponent },
  { path:'wardenSignup' , component: WardenSignupComponent },


  { path:'studentHomepage' , component: StudentHomepageComponent,
         children:
         [{ path:'studentDashboard' , component: StudentDashboardComponent},
         { path:'studentProfile' , component: StudentProfileComponent},
         { path:'leaveForm' , component: LeaveFormComponent}]
  },

  { path:'staffHomepage' , component: StaffHomepageComponent,
        children:
        [{ path:'staffDashboard' , component: StaffDashboardComponent },
        { path:'studentManagement' , component: StudentManagementComponent},
        { path:'staffDetails' , component: StaffDetailsComponent}]
  },

  { path:'adminHomepage' , component: AdminHomepageComponent,
        children:
        [{ path:'adminDashboard' , component: AdminDashboardComponent },
        { path:'studentManagement' , component: StudentManagementComponent},
        { path:'staffManagement' , component: StaffManagementComponent},
        { path:'wardenManagement' , component: WardenManagementComponent},
        { path:'adminManagement' , component: AdminManagementComponent}
      ]
  },

  { path:'wardenHomepage' , component: WardenHomepageComponent,
  children:
  [{ path:'wardenDashboard' , component: WardenDashboardComponent },
  { path:'studentManagement' , component: StudentManagementComponent},
  { path:'wardenDetails' , component: WardenDetailsComponent},
  { path:'staffManagement' , component: StaffManagementComponent}]
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
