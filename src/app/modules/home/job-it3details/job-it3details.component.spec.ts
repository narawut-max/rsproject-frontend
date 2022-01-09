import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobIt3detailsComponent } from './job-it3details.component';

describe('JobIt3detailsComponent', () => {
  let component: JobIt3detailsComponent;
  let fixture: ComponentFixture<JobIt3detailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobIt3detailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobIt3detailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
