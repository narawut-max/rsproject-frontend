import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobItComponent } from './job-it.component';

describe('JobItComponent', () => {
  let component: JobItComponent;
  let fixture: ComponentFixture<JobItComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobItComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobItComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
