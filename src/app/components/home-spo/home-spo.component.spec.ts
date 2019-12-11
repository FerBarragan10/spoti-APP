import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSpoComponent } from './home-spo.component';

describe('HomeSpoComponent', () => {
  let component: HomeSpoComponent;
  let fixture: ComponentFixture<HomeSpoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeSpoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeSpoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
