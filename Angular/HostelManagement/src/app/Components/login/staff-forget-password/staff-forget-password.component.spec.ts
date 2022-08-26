import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffForgetPasswordComponent } from './staff-forget-password.component';

describe('StaffForgetPasswordComponent', () => {
  let component: StaffForgetPasswordComponent;
  let fixture: ComponentFixture<StaffForgetPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaffForgetPasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffForgetPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
