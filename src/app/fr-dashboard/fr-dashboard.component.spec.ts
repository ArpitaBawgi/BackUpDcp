import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrDashboardComponent } from './fr-dashboard.component';

describe('FrDashboardComponent', () => {
  let component: FrDashboardComponent;
  let fixture: ComponentFixture<FrDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
