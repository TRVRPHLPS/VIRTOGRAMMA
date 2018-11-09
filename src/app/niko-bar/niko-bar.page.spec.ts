import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NikoBarPage } from './niko-bar.page';

describe('NikoBarPage', () => {
  let component: NikoBarPage;
  let fixture: ComponentFixture<NikoBarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NikoBarPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NikoBarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
