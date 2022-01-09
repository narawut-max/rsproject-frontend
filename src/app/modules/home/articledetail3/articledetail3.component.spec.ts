import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Articledetail3Component } from './articledetail3.component';

describe('Articledetail3Component', () => {
  let component: Articledetail3Component;
  let fixture: ComponentFixture<Articledetail3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Articledetail3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Articledetail3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
