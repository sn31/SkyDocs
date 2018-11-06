import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorHamburgerComponent } from './editor-hamburger.component';

describe('EditorHamburgerComponent', () => {
  let component: EditorHamburgerComponent;
  let fixture: ComponentFixture<EditorHamburgerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditorHamburgerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorHamburgerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
