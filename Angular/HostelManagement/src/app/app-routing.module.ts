import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './Components/admin/admin-dashboard/admin-dashboard.component';
import { AdminLoginComponent } from './Components/login/admin-login/admin-login.component';
import { AdminSignupComponent } from './Components/login/admin-signup/admin-signup.component';
import { StaffLoginComponent } from './Components/login/staff-login/staff-login.component';
import { StaffSignupComponent } from './Components/login/staff-signup/staff-signup.component';
import { StudentLoginComponent } from './Components/login/student-login/student-login.component';
import { StudentSignupComponent } from './Components/login/student-signup/student-signup.component';
import { StaffDashboardComponent } from './Components/staff/staff-dashboard/staff-dashboard.component';
import { StudentDashboardComponent } from './Components/student/student-dashboard/student-dashboard.component';

const routes: Routes = [
  { path:'' , component: StudentLoginComponent },
  { path:'adminLogin' , component: AdminLoginComponent },
  { path:'staffLogin' , component: StaffLoginComponent },

  { path:'studentSignup' , component: StudentSignupComponent },
  { path:'adminSignup' , component: AdminSignupComponent },
  { path:'staffSignup' , component: StaffSignupComponent },

  { path:'studentDashboard' , component: StudentDashboardComponent },
  { path:'adminDashboard' , component: AdminDashboardComponent },
  { path:'staffDashboard' , component: StaffDashboardComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
