import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WardenProfileComponent } from './warden-profile.component';

describe('WardenProfileComponent', () => {
  let component: WardenProfileComponent;
  let fixture: ComponentFixture<WardenProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WardenProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WardenProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
