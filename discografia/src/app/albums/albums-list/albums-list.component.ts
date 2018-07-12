import { Component, Input, OnInit } from '@angular/core';
import { Album } from '../Album';
import { ArtistsService } from '../../artists/artists.service';
import { SongsService } from '../../songs/songs.service';
import { AlbumsService } from '../albums.service';

@Component({
  selector: 'albums-list',
  templateUrl: './albums-list.component.html',
  styleUrls: ['./albums-list.component.scss']
})
export class AlbumsListComponent implements OnInit {
  albums: Album[] = [];
  checked = {};
  albumsViews: object[] = [];
  @Input()
  search: string = '';
  private selectedIDs: string[] = [];

  constructor(private albumsService: AlbumsService, private artistsService: ArtistsService, private songsService: SongsService) {
    albumsService.albumsChanged$.subscribe(() => this.updateAlbumsView());
  }

  ngOnInit() {
    this.updateAlbumsView();
  }

  updateAlbumsView() {
    this.getAlbums();
    this.albumsViews = this.mapAlbums(this.albums);
  }

  toggleItem(id: string) {
    let index = this.selectedIDs.indexOf(id);
    if (index !== -1) {
      this.selectedIDs.splice(index, 1);
    } else {
      this.selectedIDs.push(id);
    }
  }

  deleteSelected() {
    this.selectedIDs.forEach(id => {
      const songs = this.songsService.getSongsByAlbumId(id);
      this.songsService.replaceAlbumId(songs, '');
    });
    this.albumsService.delete(this.selectedIDs);
    this.selectedIDs = [];
  }

  onSubmit() {
    this.deleteSelected();
    this.checked = [];
  }

  getAlbums() {
    this.albums = this.albumsService.getAll();
  }

  mapAlbums(albums: Album[]): object[] {
    return albums.map(album => {
      const artist = this.artistsService.getArtistById(album.artistId);

      return {
        id: album.albumId,
        title: album.title,
        artist: artist && artist.title ? artist.title : '',
        image: album.image,
        year: album.year
      }
    })
  }

}
