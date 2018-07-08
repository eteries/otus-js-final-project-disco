import { Component, OnInit, ViewChild } from '@angular/core';
import { Album } from '../models/Album';
import { Song } from '../models/Song';
import { AlbumsService } from "../albums.service";
import { ArtistsService } from "../artists.service";
import { SongsService } from "../songs.service";
import { ImageDropComponent } from '../shared/image-drop/image-drop.component';

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

    @ViewChild(ImageDropComponent)
    private imageDrop: ImageDropComponent;

    constructor(private albumsService: AlbumsService, private artistsService: ArtistsService, private songsService: SongsService) {}

    ngOnInit() {
    }

    private searchAlbums(artistId: string) {
        this.artistAlbums = this.albumsService.getAllByArtistId(artistId);
    }

    private isAlbumSaved(title: string) : boolean {
        return !!this.artistAlbums.find(album => album.title === this.model.title);
    }

    saveImageData(encodedUrl: string) {
        this.model.image = encodedUrl;
    }

    onSubmit() {
        const artist = this.artistsService.getArtistByName(this.model.artist);
        const artistId = artist ? artist.artistId : this.artistsService.add(this.model.artist);

        if(this.albumsService.getAlbumByProps(this.model.title, artistId, this.model.year)) {
            this.message = 'The album has been added already';
            this.showConfirm = true;
            return;
        }
        if (this.albumsService.addAlbum(this.model.title, artistId, this.model.year, this.model.image)) {
            this.message = 'The album is added. Now you can add songs';
            this.showConfirm = true;
            this.submitted = true;
            this.model = [];
            this.imageDrop.reset();
        }
    }

}
