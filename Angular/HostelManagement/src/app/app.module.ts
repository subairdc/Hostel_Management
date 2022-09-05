import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
import { StudentManagementComponent } from './Components/student/student-management/student-management.component';
import { StaffHomepageComponent } from './Components/staff/staff-homepage/staff-homepage.component';
import { StudentHomepageComponent } from './Components/student/student-homepage/student-homepage.component';
import { WardenHomepageComponent } from './Components/warden/warden-homepage/warden-homepage.component';
import { AdminHomepageComponent } from './Components/admin/admin-homepage/admin-homepage.component';
import { StaffManagementComponent } from './Components/staff/staff-management/staff-management.component';
import { WardenManagementComponent } from './Components/warden/warden-management/warden-management.component';
import { LeaveFormComponent } from './Components/leaveForm/leave-form/leave-form.component';
import { StudentProfileComponent } from './Components/student/student-profile/student-profile.component';
import { AdminService } from './service/admin.service';
import { AuthService } from './service/auth.service';
import { StaffService } from './service/staff.service';
import { WardenService } from './service/warden.service';
import { StudentService } from './service/student.service';
import { NotificationService } from './service/notification.service';
import { ConfirmDialogBoxComponent } from './Components/others/confirm-dialog-box/confirm-dialog-box.component';
import { StaffDetailsComponent } from './Components/staff/staff-details/staff-details.component';
import { StudentDetailsComponent } from './Components/student/student-details/student-details.component';
import { WardenDetailsComponent } from './Components/warden/warden-details/warden-details.component';
import { DialogBoxService } from './service/dialog-box.service';
import { AdminDetailsComponent } from './Components/admin/admin-details/admin-details.component';
import { AdminManagementComponent } from './Components/admin/admin-management/admin-management.component';
import { MatDialogRef, MAT_DIALOG_DATA, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { RoomManagementComponent } from './Components/room/room-management/room-management.component';
import { RoomDetailsComponent } from './Components/room/room-details/room-details.component';
import { LeaveFormManagementComponent } from './Components/leaveForm/leave-form-management/leave-form-management.component';
import { LeaveFormVerifyComponent } from './Components/leaveForm/leave-form-verify/leave-form-verify.component';
import { AdminForgetPasswordComponent } from './Components/login/admin-forget-password/admin-forget-password.component';
import { StaffForgetPasswordComponent } from './Components/login/staff-forget-password/staff-forget-password.component';
import { WardenForgetPasswordComponent } from './Components/login/warden-forget-password/warden-forget-password.component';
import { StudentForgetPasswordComponent } from './Components/login/student-forget-password/student-forget-password.component';
import { StudentChangePasswordComponent } from './Components/login/student-change-password/student-change-password.component';
import { StaffProfileComponent } from './Components/staff/staff-profile/staff-profile.component';
import { WardenProfileComponent } from './Components/warden/warden-profile/warden-profile.component';
import { AdminProfileComponent } from './Components/admin/admin-profile/admin-profile.component';

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
    StudentProfileComponent,
    ConfirmDialogBoxComponent,
    StaffDetailsComponent,
    StudentDetailsComponent,
    WardenDetailsComponent,
    AdminDetailsComponent,
    AdminManagementComponent,
    RoomManagementComponent,
    RoomDetailsComponent,
    LeaveFormManagementComponent,
    LeaveFormVerifyComponent,
    AdminForgetPasswordComponent,
    StaffForgetPasswordComponent,
    WardenForgetPasswordComponent,
    StudentForgetPasswordComponent,
    StudentChangePasswordComponent,
    StaffProfileComponent,
    WardenProfileComponent,
    AdminProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,ReactiveFormsModule
  ],
  providers: [AdminService,AuthService,StaffService,WardenService,StudentService,NotificationService,DialogBoxService,
  {provide: MatDialogRef,useValue: []}, {provide: MAT_DIALOG_DATA,useValue: []}, {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}],
  bootstrap: [AppComponent],
  entryComponents: [AdminDetailsComponent,StudentDetailsComponent,StaffDetailsComponent,WardenDetailsComponent, ConfirmDialogBoxComponent]
})
export class AppModule { }
