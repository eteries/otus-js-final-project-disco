import { Component, OnInit } from '@angular/core';
import { Song } from '../Song';
import { AlbumsService } from "../../albums/albums.service";
import { ArtistsService } from "../../artists/artists.service";
import { SongsService } from "../songs.service";
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common'
import { UtilsService } from "../../shared/utils.service";

@Component({
  selector: 'app-add-song',
  templateUrl: './add-song.component.html',
  styleUrls: ['./add-song.component.scss']
})
export class AddSongComponent implements OnInit {
  model: Song;
  showConfirm: boolean = false;
  incomingSong: Song;
  currentArtist = {} as any;

  constructor(private albumsService: AlbumsService, private artistsService: ArtistsService, private route: ActivatedRoute, private router: Router, private songsService: SongsService, private location: Location, private utils: UtilsService) {}

  ngOnInit() {
    this.fillForm(this.route.snapshot.paramMap.get('id'));
  }

  handleArtistInput(artistName: string) {
    const artist = this.artistsService.getArtistByName(artistName);
    if (!artist) {
      this.currentArtist.id = this.artistsService.add(artistName);
      this.currentArtist.albums = [];
    } else {
      this.currentArtist.id = artist.artistId;
      this.currentArtist.albums = this.getAlbums(this.currentArtist.id);
    }
  }

  save() {
    const song = Object.assign(this.model, {artistId: this.currentArtist.id});
    if (this.songsService.add(song)) {
      this.showConfirm = true;
    }
  }

  update(id: string) {
    if(!this.currentArtist.id) this.currentArtist.id = this.incomingSong.artistId;

    if (this.songsService.updateSongById(id, this.model.title, this.currentArtist.id, this.model.albumId, this.model.track, this.model.youtube)) {
      this.location.back();
    }
  }

  onSubmit() {
    if (this.isEditMode()) this.update(this.incomingSong.id);
    else this.save();
  }

  isEditMode(): boolean {
    return !!this.incomingSong;
  }

  private fillForm(id: string) {
    this.incomingSong = this.songsService.getSongById(id);
    if (this.incomingSong) {
      this.currentArtist.id = this.incomingSong.artistId;
      this.currentArtist.albums = this.getAlbums(this.incomingSong.artistId);
      this.currentArtist.artist = this.artistsService.getArtistById(this.currentArtist.id).title;

      this.model = this.incomingSong;
    } else {
      this.model = new Song(this.utils.generateId(), new Date().toString(), '', '', '', null, '');
    }
  }

  private getAlbums(artistId: string) {
    return this.albumsService.getAllByArtistId(artistId);
  }

}
