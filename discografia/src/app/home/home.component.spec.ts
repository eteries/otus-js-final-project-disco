import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { SongsListComponent } from '../songs/songs-list/songs-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AlbumsListComponent } from '../albums/albums-list/albums-list.component';
import { FormsModule } from '@angular/forms';
import { TextFilterPipe } from '../shared/text-filter/text-filter.pipe';
import { SongListItemComponent } from '../songs/song-list-item/song-list-item.component';
import { RouterTestingModule } from '@angular/router/testing';
import { AlbumsListItemComponent } from '../albums/albums-list-item/albums-list-item.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent, SongsListComponent, SongListItemComponent, AlbumsListComponent, AlbumsListItemComponent, TextFilterPipe ],
      imports: [FormsModule, NgbModule.forRoot(), RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
