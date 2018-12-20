import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { T2CourseListComponent } from './t2-course-list.component';

describe('T2CourseListComponent', () => {
  let component: T2CourseListComponent;
  let fixture: ComponentFixture<T2CourseListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ T2CourseListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(T2CourseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
