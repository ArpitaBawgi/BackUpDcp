import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScramblesComponent } from './scrambles.component';

describe('ScramblesComponent', () => {
  let component: ScramblesComponent;
  let fixture: ComponentFixture<ScramblesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScramblesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScramblesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
