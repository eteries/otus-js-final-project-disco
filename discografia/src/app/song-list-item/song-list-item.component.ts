import { Component, OnInit, Input } from '@angular/core';
import { Song } from '../models/Song';
import { ArtistsService } from '../artists.service';
import { Log } from '@angular/core/testing/src/logger';

@Component({
  selector: 'song-list-item',
  templateUrl: './song-list-item.component.html',
  styleUrls: ['./song-list-item.component.scss']
})
export class SongListItemComponent implements OnInit {

  @Input()
  song: Song;

  title: string = 'unknown artist';

  constructor(public artistsService: ArtistsService) {}

  ngOnInit() {
      const artist = this.artistsService.getArtistById(this.song.artistId);
      if(artist) {
          this.title = this.artistsService.getArtistById(this.song.artistId).title;
      }
  }

}
