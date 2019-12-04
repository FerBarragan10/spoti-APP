import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenpopupComponent } from './openpopup.component';

describe('OpenpopupComponent', () => {
  let component: OpenpopupComponent;
  let fixture: ComponentFixture<OpenpopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenpopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenpopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
