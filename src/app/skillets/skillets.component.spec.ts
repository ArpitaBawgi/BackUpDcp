import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkilletsComponent } from './skillets.component';

describe('SkilletsComponent', () => {
  let component: SkilletsComponent;
  let fixture: ComponentFixture<SkilletsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkilletsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkilletsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
