import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAlbumComponent } from './add-album.component';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { AlertSelfclosingComponent } from '../../shared/alert-selfclosing/alert-selfclosing.component';
import { ImageDropComponent } from '../../shared/image-drop/image-drop.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FileDropModule } from 'ngx-file-drop';

describe('AddAlbumComponent', () => {
  let component: AddAlbumComponent;
  let fixture: ComponentFixture<AddAlbumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAlbumComponent, AlertSelfclosingComponent, ImageDropComponent],
      imports: [FormsModule, RouterTestingModule, NgbModule, FileDropModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
