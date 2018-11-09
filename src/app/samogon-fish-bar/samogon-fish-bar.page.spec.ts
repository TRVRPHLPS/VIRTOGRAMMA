import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SamogonFishBarPage } from './samogon-fish-bar.page';

describe('SamogonFishBarPage', () => {
  let component: SamogonFishBarPage;
  let fixture: ComponentFixture<SamogonFishBarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SamogonFishBarPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SamogonFishBarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
