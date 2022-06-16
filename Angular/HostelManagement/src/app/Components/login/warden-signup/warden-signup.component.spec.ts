import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WardenSignupComponent } from './warden-signup.component';

describe('WardenSignupComponent', () => {
  let component: WardenSignupComponent;
  let fixture: ComponentFixture<WardenSignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WardenSignupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WardenSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
