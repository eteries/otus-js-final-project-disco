import { Component, OnInit, ViewChild } from '@angular/core';
import { Album } from '../Album';
import { AlbumsService } from "../albums.service";
import { ArtistsService } from "../../artists/artists.service";
import { SongsService } from "../../songs/songs.service";
import { ImageDropComponent } from '../../shared/image-drop/image-drop.component';
import { ActivatedRoute, Router } from '@angular/router';
import { Messages } from '../../shared/constants';

@Component({
  selector: 'add-album',
  templateUrl: './add-album.component.html',
  styleUrls: ['./add-album.component.scss']
})
export class AddAlbumComponent implements OnInit {
  model: any = {
    title: <string> null,
    artist: <string> null,
    year: <string> null,
    image: <string> null
  };
  artistAlbums: Album[] = [];
  showConfirm: boolean = false;
  message: string = '';
  submitted: boolean = false;
  incomingAlbum: Album;

  @ViewChild(ImageDropComponent)
  private imageDrop: ImageDropComponent;

  constructor(private albumsService: AlbumsService, private artistsService: ArtistsService, private route: ActivatedRoute, private router: Router, private songsService: SongsService) {
  }

  get debug() {
    return JSON.stringify(this.model)
  }

  ngOnInit() {
    this.fillForm(this.route.snapshot.paramMap.get('id'));
  }

  isEditMode(): boolean {
    return !!this.incomingAlbum;
  }

  saveImageData(encodedUrl: string) {
    this.model.image = encodedUrl;
  }

  onSubmit() {
    const artist = this.artistsService.getArtistByName(this.model.artist);
    const artistId = artist ? artist.artistId : this.artistsService.add(this.model.artist);

    if (this.isEditMode()) this.update(artistId);
    else this.save(artistId);

  }

  save(artistId: string) {
    if (this.albumsService.getAlbumByProps(this.model.title, artistId, this.model.year)) {
      this.message = Messages.ALBUM_DOUBLE;
      this.showConfirm = true;
      return;
    }
    if (this.albumsService.addAlbum(this.model.title, artistId, this.model.year, this.model.image)) {
      this.message = Messages.ALBUM_ADDED;
      this.showConfirm = true;
      this.submitted = true;
      this.model = [];
      this.imageDrop.reset();
    }
  }

  update(artistId) {
    if (this.albumsService.updateAlbum(this.incomingAlbum.albumId, this.model.title, artistId, this.model.year, this.model.image)) {
      this.router.navigate(['/album/view', this.incomingAlbum.albumId]);
    }
  }

  private searchAlbums(artistId: string) {
    this.artistAlbums = this.albumsService.getAllByArtistId(artistId);
  }

  private isAlbumSaved(title: string): boolean {
    return !!this.artistAlbums.find(album => album.title === this.model.title);
  }

  private fillForm(id: string) {
    this.incomingAlbum = this.albumsService.getAlbumById(id);
    if (this.incomingAlbum) {
      this.model = {
        title: this.incomingAlbum.title,
        artist: this.artistsService.getArtistById(this.incomingAlbum.artistId).title,
        year: this.incomingAlbum.year,
        image: this.incomingAlbum.image
      }
    }
  }

}
