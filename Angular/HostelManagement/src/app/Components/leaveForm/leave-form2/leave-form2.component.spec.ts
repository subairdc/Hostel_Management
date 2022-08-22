import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveForm2Component } from './leave-form2.component';

describe('LeaveForm2Component', () => {
  let component: LeaveForm2Component;
  let fixture: ComponentFixture<LeaveForm2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeaveForm2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaveForm2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
