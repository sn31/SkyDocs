import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashTitleComponent } from './dash-title.component';

describe('DashTitleComponent', () => {
  let component: DashTitleComponent;
  let fixture: ComponentFixture<DashTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
