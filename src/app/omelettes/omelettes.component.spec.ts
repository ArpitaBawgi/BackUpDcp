import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OmelettesComponent } from './omelettes.component';

describe('OmelettesComponent', () => {
  let component: OmelettesComponent;
  let fixture: ComponentFixture<OmelettesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OmelettesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OmelettesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
