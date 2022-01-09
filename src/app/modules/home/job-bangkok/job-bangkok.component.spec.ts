import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobBangkokComponent } from './job-bangkok.component';

describe('JobBangkokComponent', () => {
  let component: JobBangkokComponent;
  let fixture: ComponentFixture<JobBangkokComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobBangkokComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobBangkokComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
