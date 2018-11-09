import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LemongrassCafePage } from './lemongrass-cafe.page';

describe('LemongrassCafePage', () => {
  let component: LemongrassCafePage;
  let fixture: ComponentFixture<LemongrassCafePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LemongrassCafePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LemongrassCafePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
