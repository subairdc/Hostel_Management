import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentForgetPasswordComponent } from './student-forget-password.component';

describe('StudentForgetPasswordComponent', () => {
  let component: StudentForgetPasswordComponent;
  let fixture: ComponentFixture<StudentForgetPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentForgetPasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentForgetPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
