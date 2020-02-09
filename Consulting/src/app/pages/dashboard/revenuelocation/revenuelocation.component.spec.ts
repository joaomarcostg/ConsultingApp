import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RevenuelocationComponent } from './revenuelocation.component';

describe('RevenuelocationComponent', () => {
  let component: RevenuelocationComponent;
  let fixture: ComponentFixture<RevenuelocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RevenuelocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RevenuelocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
