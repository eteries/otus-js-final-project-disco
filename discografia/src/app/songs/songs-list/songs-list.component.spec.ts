import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SongsListComponent } from './songs-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { TextFilterPipe } from '../../shared/text-filter/text-filter.pipe';
import { SongListItemComponent } from '../song-list-item/song-list-item.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('SongsListComponent', () => {
  let component: SongsListComponent;
  let fixture: ComponentFixture<SongsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SongsListComponent, TextFilterPipe, SongListItemComponent ],
      imports: [ NgbModule, FormsModule, RouterTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SongsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
