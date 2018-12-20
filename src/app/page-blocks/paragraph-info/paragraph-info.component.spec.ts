import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParagraphInfoComponent } from './paragraph-info.component';

describe('ParagraphInfoComponent', () => {
  let component: ParagraphInfoComponent;
  let fixture: ComponentFixture<ParagraphInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParagraphInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParagraphInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
