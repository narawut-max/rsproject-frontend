import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobNortheasternComponent } from './job-northeastern.component';

describe('JobNortheasternComponent', () => {
  let component: JobNortheasternComponent;
  let fixture: ComponentFixture<JobNortheasternComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobNortheasternComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobNortheasternComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
