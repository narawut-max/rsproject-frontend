import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBestcompanyComponent } from './home-bestcompany.component';

describe('HomeBestcompanyComponent', () => {
  let component: HomeBestcompanyComponent;
  let fixture: ComponentFixture<HomeBestcompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeBestcompanyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeBestcompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
