import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobEasternComponent } from './job-eastern.component';

describe('JobEasternComponent', () => {
  let component: JobEasternComponent;
  let fixture: ComponentFixture<JobEasternComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobEasternComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobEasternComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
