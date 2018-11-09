import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DolmaPage } from './dolma.page';

describe('DolmaPage', () => {
  let component: DolmaPage;
  let fixture: ComponentFixture<DolmaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DolmaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DolmaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
