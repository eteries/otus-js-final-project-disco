import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumViewComponent } from './album-view.component';
import { SortPipe } from '../../shared/sort-pipe/sort.pipe';
import { RouterTestingModule } from '@angular/router/testing';

describe('AlbumViewComponent', () => {
  let component: AlbumViewComponent;
  let fixture: ComponentFixture<AlbumViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlbumViewComponent, SortPipe],
      imports: [ RouterTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
