import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobThenorthComponent } from './job-thenorth.component';

describe('JobThenorthComponent', () => {
  let component: JobThenorthComponent;
  let fixture: ComponentFixture<JobThenorthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobThenorthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobThenorthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
