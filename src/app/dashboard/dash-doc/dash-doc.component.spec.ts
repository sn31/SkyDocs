import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashDocComponent } from './dash-doc.component';

describe('DashDocComponent', () => {
  let component: DashDocComponent;
  let fixture: ComponentFixture<DashDocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashDocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
