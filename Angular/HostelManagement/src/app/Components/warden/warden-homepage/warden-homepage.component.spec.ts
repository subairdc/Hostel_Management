import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WardenHomepageComponent } from './warden-homepage.component';

describe('WardenHomepageComponent', () => {
  let component: WardenHomepageComponent;
  let fixture: ComponentFixture<WardenHomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WardenHomepageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WardenHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
