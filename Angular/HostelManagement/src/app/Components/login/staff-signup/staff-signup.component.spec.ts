import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffSignupComponent } from './staff-signup.component';

describe('StaffSignupComponent', () => {
  let component: StaffSignupComponent;
  let fixture: ComponentFixture<StaffSignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaffSignupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
