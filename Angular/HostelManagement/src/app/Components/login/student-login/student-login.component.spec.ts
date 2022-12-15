import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'

import { StudentLoginComponent } from './student-login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';
import { of } from 'rxjs';


fdescribe('StudentLoginComponent', () => {
  let component: StudentLoginComponent;
  let fixture: ComponentFixture<StudentLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports : [RouterTestingModule,HttpClientTestingModule, ReactiveFormsModule],
      declarations: [ StudentLoginComponent ],
      providers: [AuthService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('check', () => {
    fixture = TestBed.createComponent(StudentLoginComponent);
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.text-success')?.textContent).toEqual('STUDENT LOGIN');
  });
});
