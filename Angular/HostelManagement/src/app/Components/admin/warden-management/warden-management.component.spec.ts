import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WardenManagementComponent } from './warden-management.component';

describe('WardenManagementComponent', () => {
  let component: WardenManagementComponent;
  let fixture: ComponentFixture<WardenManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WardenManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WardenManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
