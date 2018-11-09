import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndigoPage } from './indigo.page';

describe('IndigoPage', () => {
  let component: IndigoPage;
  let fixture: ComponentFixture<IndigoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndigoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndigoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
