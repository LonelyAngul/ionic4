import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KanbanPage } from './kanban.page';

describe('KanbanPage', () => {
  let component: KanbanPage;
  let fixture: ComponentFixture<KanbanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KanbanPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KanbanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
