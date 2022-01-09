import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobWesternComponent } from './job-western.component';

describe('JobWesternComponent', () => {
  let component: JobWesternComponent;
  let fixture: ComponentFixture<JobWesternComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobWesternComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobWesternComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
