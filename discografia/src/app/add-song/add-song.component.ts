import { Component, OnInit } from '@angular/core';
import { Album } from '../models/Album';
import { Song } from '../models/Song';
import { AlbumsService } from "../albums.service";
import { ArtistsService } from "../artists.service";
import { SongsService } from "../songs.service";
import { AlbumGroup } from "../models/AlbumGroup";
import { generateId } from "../shared/utils"

@Component({
    selector: 'app-add-song',
    templateUrl: './add-song.component.html',
    styleUrls: ['./add-song.component.scss']
})
export class AddSongComponent implements OnInit {
    model = {
        title: <string> null,
        artist: <string> null,
        album: <string> null
    };
    artistAlbums: Album[] = [];
    artistId: string = '';
    selectedAlbumId: string = '';
    showConfirm: boolean = false;

    constructor(private albumsService: AlbumsService, private artistsService: ArtistsService, private songsService: SongsService) {}

    ngOnInit() {
    }

    get debug() {
        return JSON.stringify(this.model)
    }

    onChange(a) {
        console.log(a);
    }

    handleArtistInput(artistName: string) {
        const artist = this.artistsService.getArtistByName(artistName);
        if(!artist) {
            this.artistAlbums = [];
            this.artistId = this.artistsService.add(artistName);
        } else {
            this.artistId = artist.artistId;
            this.searchAlbums(this.artistId);
        }
    }

    private searchAlbums(artistId: string) {
        this.artistAlbums = this.albumsService.getAllByArtistId(artistId);
    }

    onSubmit() {
        const song: Song = new Song(generateId(), new Date().toString(), this.model.title, this.artistId, this.model.album, '');
        if (this.songsService.add(song)) {
            console.log('song is added');
            this.showConfirm = true;
        }
    }

}
