import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeJobrecomComponent } from './home-jobrecom.component';

describe('HomeJobrecomComponent', () => {
  let component: HomeJobrecomComponent;
  let fixture: ComponentFixture<HomeJobrecomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeJobrecomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeJobrecomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
