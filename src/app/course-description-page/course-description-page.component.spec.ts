import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseDescriptionPageComponent } from './course-description-page.component';

describe('CourseDescriptionPageComponent', () => {
  let component: CourseDescriptionPageComponent;
  let fixture: ComponentFixture<CourseDescriptionPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseDescriptionPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseDescriptionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
