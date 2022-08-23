import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveForm2VerifyComponent } from './leave-form2-verify.component';

describe('LeaveForm2VerifyComponent', () => {
  let component: LeaveForm2VerifyComponent;
  let fixture: ComponentFixture<LeaveForm2VerifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeaveForm2VerifyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaveForm2VerifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
