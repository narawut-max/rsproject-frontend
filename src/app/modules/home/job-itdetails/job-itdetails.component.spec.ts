import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobItdetailsComponent } from './job-itdetails.component';

describe('JobItdetailsComponent', () => {
  let component: JobItdetailsComponent;
  let fixture: ComponentFixture<JobItdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobItdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobItdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
