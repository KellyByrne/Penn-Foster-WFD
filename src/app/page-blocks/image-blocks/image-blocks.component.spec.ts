import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageBlocksComponent } from './image-blocks.component';

describe('ImageBlocksComponent', () => {
  let component: ImageBlocksComponent;
  let fixture: ComponentFixture<ImageBlocksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageBlocksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageBlocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
