import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WardenForgetPasswordComponent } from './warden-forget-password.component';

describe('WardenForgetPasswordComponent', () => {
  let component: WardenForgetPasswordComponent;
  let fixture: ComponentFixture<WardenForgetPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WardenForgetPasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WardenForgetPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
