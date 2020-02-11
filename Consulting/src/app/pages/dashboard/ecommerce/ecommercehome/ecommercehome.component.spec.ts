import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EcommercehomeComponent } from './ecommercehome.component';

describe('EcommercehomeComponent', () => {
  let component: EcommercehomeComponent;
  let fixture: ComponentFixture<EcommercehomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EcommercehomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EcommercehomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
