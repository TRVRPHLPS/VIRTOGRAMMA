import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NamPage } from './nam.page';

describe('NamPage', () => {
  let component: NamPage;
  let fixture: ComponentFixture<NamPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NamPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NamPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
