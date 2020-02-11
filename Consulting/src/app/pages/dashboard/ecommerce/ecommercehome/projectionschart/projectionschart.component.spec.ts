import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectionschartComponent } from './projectionschart.component';

describe('ProjectionschartComponent', () => {
  let component: ProjectionschartComponent;
  let fixture: ComponentFixture<ProjectionschartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectionschartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectionschartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
