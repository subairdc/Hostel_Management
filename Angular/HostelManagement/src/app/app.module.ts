import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './Material/material.module';

import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { StudentLoginComponent } from './Components/login/student-login/student-login.component';
import { AdminLoginComponent } from './Components/login/admin-login/admin-login.component';
import { StudentDashboardComponent } from './Components/student/student-dashboard/student-dashboard.component';
import { StaffDashboardComponent } from './Components/staff/staff-dashboard/staff-dashboard.component';
import { AdminDashboardComponent } from './Components/admin/admin-dashboard/admin-dashboard.component';
import { StaffLoginComponent } from './Components/login/staff-login/staff-login.component';
import { StudentSignupComponent } from './Components/login/student-signup/student-signup.component';
import { StaffSignupComponent } from './Components/login/staff-signup/staff-signup.component';
import { AdminSignupComponent } from './Components/login/admin-signup/admin-signup.component';
import { WardenLoginComponent } from './Components/login/warden-login/warden-login.component';
import { WardenDashboardComponent } from './Components/warden/warden-dashboard/warden-dashboard.component';
import { WardenSignupComponent } from './Components/login/warden-signup/warden-signup.component';
import { StudentManagementComponent } from './Components/staff/student-management/student-management.component';
import { StaffHomepageComponent } from './Components/staff/staff-homepage/staff-homepage.component';
import { StudentHomepageComponent } from './Components/student/student-homepage/student-homepage.component';
import { WardenHomepageComponent } from './Components/warden/warden-homepage/warden-homepage.component';
import { AdminHomepageComponent } from './Components/admin/admin-homepage/admin-homepage.component';
import { StaffManagementComponent } from './Components/admin/staff-management/staff-management.component';
import { WardenManagementComponent } from './Components/admin/warden-management/warden-management.component';
import { LeaveFormComponent } from './Components/student/leave-form/leave-form.component';
import { StudentProfileComponent } from './Components/student/student-profile/student-profile.component';
import { AdminService } from './service/admin.service';
import { AuthService } from './service/auth.service';
import { StaffService } from './service/staff.service';
import { WardenService } from './service/warden.service';
import { StudentService } from './service/student.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    StudentLoginComponent,
    AdminLoginComponent,
    StudentDashboardComponent,
    StaffDashboardComponent,
    AdminDashboardComponent,
    StaffLoginComponent,
    StudentSignupComponent,
    StaffSignupComponent,
    AdminSignupComponent,
    WardenLoginComponent,
    WardenDashboardComponent,
    WardenSignupComponent,
    StudentManagementComponent,
    StaffHomepageComponent,
    StudentHomepageComponent,
    WardenHomepageComponent,
    AdminHomepageComponent,
    StaffManagementComponent,
    WardenManagementComponent,
    LeaveFormComponent,
    StudentProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [AdminService,AuthService,StaffService,WardenService,StudentService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
