import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolPage } from './tool.page';

describe('ToolPage', () => {
  let component: ToolPage;
  let fixture: ComponentFixture<ToolPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
