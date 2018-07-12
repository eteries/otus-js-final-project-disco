import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { Song } from '../Song';
import { AlbumsService } from '../../albums/albums.service';
import { ArtistsService } from '../../artists/artists.service';
import { SongsService } from '../songs.service';

@Component({
  selector: 'songs-list',
  templateUrl: './songs-list.component.html',
  styleUrls: ['./songs-list.component.scss']
})
export class SongsListComponent implements OnInit {
  songs:Song[] = [];
  private selected: string[] = [];
  checked = {};
  songViews: object[] = [];

  @Input()
  search: string = '';

  constructor(private albumsService: AlbumsService, private artistsService: ArtistsService, private songsService: SongsService) {
      songsService.songsChanged$.subscribe(() =>  this.updateSongs());
  }

  ngOnInit() {
    this.updateSongs();
  }

  toggleItem(id: string) {
    let index= this.selected.indexOf(id);
    if(index !== -1) {
        this.selected.splice(index, 1);
    } else {
        this.selected.push(id);
    }
  }

  deleteSelected() {
    this.songsService.delete(this.selected);
    this.selected = [];
  }

  onSubmit() {
      this.deleteSelected();
      this.checked = [];
  }

  getSongs() {
      this.songs = this.songsService.getAll();
  }

  mapSongs(songs: Song[]) : object[] {
    return songs.map(song => {
      const album = this.albumsService.getAlbumById(song.albumId);
      const artist = this.artistsService.getArtistById(song.artistId);

      return {
        id: song.id,
        title: song.title,
        artist: artist && artist.title ? artist.title: '',
        album: album && album.title ? album.title: '',
        year: album && album.year ? album.year: '',
        track: song.track,
        youtube: song.youtube
      }
    })
  }

  private updateSongs() {
    this.getSongs();
    this.songViews = this.mapSongs(this.songs);
  }

}
