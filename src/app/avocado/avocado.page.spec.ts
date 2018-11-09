import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvocadoPage } from './avocado.page';

describe('AvocadoPage', () => {
  let component: AvocadoPage;
  let fixture: ComponentFixture<AvocadoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvocadoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvocadoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
