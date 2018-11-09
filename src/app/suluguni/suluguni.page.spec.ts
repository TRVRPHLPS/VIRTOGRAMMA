import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuluguniPage } from './suluguni.page';

describe('SuluguniPage', () => {
  let component: SuluguniPage;
  let fixture: ComponentFixture<SuluguniPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuluguniPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuluguniPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
