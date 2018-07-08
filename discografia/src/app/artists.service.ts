import { Injectable } from '@angular/core';
import { Artist } from './models/Artist';
import { generateId } from "./shared/utils";
import { Album } from "./models/Album";
import {Song} from "./models/Song";

@Injectable({
    providedIn: 'root'
})
export class ArtistsService {
    private artists: Artist[] = [];

    constructor() {
        const stored = localStorage.getItem('artists');
        this.artists = stored ? JSON.parse(stored) : [];
    }

    getArtistByName(name: string): Artist {
      return this.artists.find(artist => artist.title.toLowerCase() === name.toLowerCase());
    }

    getArtistById(id: string): Artist {
      return this.artists.find(artist => artist.artistId === id);
    }

    add(title: string) {
        const artist = new Artist(generateId(), title, []);
        if(this.artists.push(artist)) {
            this.save();
            return artist.artistId;
        }
    }

    getAll(): Artist[] {
        return this.artists.slice();
    }

    isAdded(artistId: string) : boolean {
        return !!this.artists.find(artist => artist.artistId === artistId);
    }

    private save() {
        localStorage.setItem('artists', JSON.stringify(this.artists));
    }

}