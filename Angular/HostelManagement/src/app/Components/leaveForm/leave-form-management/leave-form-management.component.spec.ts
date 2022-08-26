import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveFormManagementComponent } from './leave-form-management.component';

describe('LeaveFormManagementComponent', () => {
  let component: LeaveFormManagementComponent;
  let fixture: ComponentFixture<LeaveFormManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeaveFormManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaveFormManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
