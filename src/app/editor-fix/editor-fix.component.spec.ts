import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorFixComponent } from './editor-fix.component';

describe('EditorFixComponent', () => {
  let component: EditorFixComponent;
  let fixture: ComponentFixture<EditorFixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditorFixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorFixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
