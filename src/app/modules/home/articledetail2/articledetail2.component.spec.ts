import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Articledetail2Component } from './articledetail2.component';

describe('Articledetail2Component', () => {
  let component: Articledetail2Component;
  let fixture: ComponentFixture<Articledetail2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Articledetail2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Articledetail2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
