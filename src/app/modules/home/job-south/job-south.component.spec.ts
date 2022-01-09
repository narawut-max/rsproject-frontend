import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobSouthComponent } from './job-south.component';

describe('JobSouthComponent', () => {
  let component: JobSouthComponent;
  let fixture: ComponentFixture<JobSouthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobSouthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobSouthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
