import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComphistoryComponent } from './comphistory.component';

describe('ComphistoryComponent', () => {
  let component: ComphistoryComponent;
  let fixture: ComponentFixture<ComphistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComphistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComphistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
