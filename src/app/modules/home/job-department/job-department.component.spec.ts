import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobDepartmentComponent } from './job-department.component';

describe('JobDepartmentComponent', () => {
  let component: JobDepartmentComponent;
  let fixture: ComponentFixture<JobDepartmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobDepartmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobDepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
