import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobCentralComponent } from './job-central.component';

describe('JobCentralComponent', () => {
  let component: JobCentralComponent;
  let fixture: ComponentFixture<JobCentralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobCentralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobCentralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
