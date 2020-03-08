import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GriddlesComponent } from './griddles.component';

describe('GriddlesComponent', () => {
  let component: GriddlesComponent;
  let fixture: ComponentFixture<GriddlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GriddlesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GriddlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
