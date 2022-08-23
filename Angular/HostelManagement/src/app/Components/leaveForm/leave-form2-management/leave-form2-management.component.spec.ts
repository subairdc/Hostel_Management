import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveForm2ManagementComponent } from './leave-form2-management.component';

describe('LeaveForm2ManagementComponent', () => {
  let component: LeaveForm2ManagementComponent;
  let fixture: ComponentFixture<LeaveForm2ManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeaveForm2ManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaveForm2ManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
