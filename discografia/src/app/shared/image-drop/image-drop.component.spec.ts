import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageDropComponent } from './image-drop.component';
import { FileDropModule } from 'ngx-file-drop';

describe('ImageDropComponent', () => {
  let component: ImageDropComponent;
  let fixture: ComponentFixture<ImageDropComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageDropComponent ],
      imports: [ FileDropModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageDropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
