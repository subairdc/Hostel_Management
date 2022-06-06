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
    AdminSignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
