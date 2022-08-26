import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveFormVerifyComponent } from './leave-form-verify.component';

describe('LeaveFormVerifyComponent', () => {
  let component: LeaveFormVerifyComponent;
  let fixture: ComponentFixture<LeaveFormVerifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeaveFormVerifyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaveFormVerifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
