import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobIt2detailsComponent } from './job-it2details.component';

describe('JobIt2detailsComponent', () => {
  let component: JobIt2detailsComponent;
  let fixture: ComponentFixture<JobIt2detailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobIt2detailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobIt2detailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
