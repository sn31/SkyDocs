import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashSideComponent } from './dash-side.component';

describe('DashSideComponent', () => {
  let component: DashSideComponent;
  let fixture: ComponentFixture<DashSideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashSideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
