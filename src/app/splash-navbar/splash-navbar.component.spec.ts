import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SplashNavbarComponent } from './splash-navbar.component';

describe('SplashNavbarComponent', () => {
  let component: SplashNavbarComponent;
  let fixture: ComponentFixture<SplashNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SplashNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SplashNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
