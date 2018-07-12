import { Injectable } from '@angular/core';
import { Artist } from './Artist';
import { StorageService } from '../shared/storage.service';
import { UtilsService } from "../shared/utils.service";

@Injectable({
  providedIn: 'root'
})
export class ArtistsService {
  private artists: Artist[] = [];

  constructor(private storageService: StorageService, private utils: UtilsService) {
    this.artists = this.storageService.load('artists');
  }

  getArtistByName(name: string): Artist {
    return this.artists.find(artist => artist.title.toLowerCase() === name.toLowerCase());
  }

  getArtistById(id: string): Artist {
    return this.artists.find(artist => artist.artistId === id);
  }

  add(title: string) {
    const artist = new Artist(this.utils.generateId(), title, []);
    if (this.artists.push(artist)) {
      this.save();
      return artist.artistId;
    }
  }

  getAll(): Artist[] {
    return this.artists.slice();
  }

  isAdded(artistId: string): boolean {
    return !!this.artists.find(artist => artist.artistId === artistId);
  }

  private save() {
    this.storageService.save('artists', this.artists);
  }

}
