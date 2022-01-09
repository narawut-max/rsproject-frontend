import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Articledetail1Component } from './articledetail1.component';

describe('Articledetail1Component', () => {
  let component: Articledetail1Component;
  let fixture: ComponentFixture<Articledetail1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Articledetail1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Articledetail1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
