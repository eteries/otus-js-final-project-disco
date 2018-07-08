import { Injectable } from '@angular/core';
import { Album } from './models/Album';
import { AlbumGroup } from './models/AlbumGroup';
import { Subject } from "rxjs/index";
import { generateId } from "./shared/utils";
import { Song } from './models/Song';

@Injectable({
    providedIn: 'root'
})
export class AlbumsService {
    private albumsChanged = new Subject<string>();
    albumsChanged$ = this.albumsChanged.asObservable();


    private albums: Album[] = [];

    constructor() {
        const stored = localStorage.getItem('albums');
        this.albums = stored ? JSON.parse(stored) : [];
    }

    getAllByArtistId(artistId: string): Album[] {
        return this.albums.filter(album => album.artistId === artistId);
    }

    addAlbum(title: string, artistId: string, year: string, image: string) {
        const album = new Album(generateId(), new Date().toString(), title, artistId, year, image, []);
        console.log(album);
        if(this.albums.push(album)) {
            this.albumsChanged.next(album.title);
            this.save();
            return true;
        }
    }

    getAlbumByProps(title: string, artistId: string, year: string) : Album | undefined {
        const all = this.getAllByArtistId(artistId);
        if(!all.length) return;

        const withThisName = all.filter(album => album.title.toLowerCase() === title.toLowerCase());
        if(!withThisName.length) return;

        return withThisName.find(album => album.year === year);
    }

    private save() {
        localStorage.setItem('albums', JSON.stringify(this.albums));
    }
}
