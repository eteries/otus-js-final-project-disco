import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { ArtistsService } from '../../artists/artists.service';
import { SongsService } from '../../songs/songs.service';
import { AlbumsService } from '../albums.service';
import { Album } from '../Album';
import { Song } from '../../songs/Song';
import { Observable } from 'rxjs/internal/Observable';
import { ObservableInput } from 'rxjs/internal/types';

@Component({
  selector: 'app-album-view',
  templateUrl: './album-view.component.html',
  styleUrls: ['./album-view.component.scss']
})
export class AlbumViewComponent implements OnInit {
  album: Album;
  songs: Song[] = [];
  artistTitle: string = '';

  constructor(private route: ActivatedRoute, private router: Router, private albumsService: AlbumsService, private artistsService: ArtistsService, private songsService: SongsService) { }

  ngOnInit() {
      this.album = this.albumsService.getAlbumById(this.route.snapshot.paramMap.get('id'));
      this.songs = this.songsService.getSongsByAlbumId(this.album.albumId);
      this.artistTitle = this.artistsService.getArtistById(this.album.artistId).title;
  }

}
