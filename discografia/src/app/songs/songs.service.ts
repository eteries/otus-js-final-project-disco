import { Injectable } from '@angular/core';
import { Song } from './Song';
import { Subject } from 'rxjs'
import { StorageService } from "../shared/storage.service";

@Injectable({
  providedIn: 'root'
})
export class SongsService {
  deleteOne = (id) => {
    const index = this.songs.findIndex(song => song.id === id);
    this.songs.splice(index, 1);
    this.songsChanged.next();
    this.save();
  };
  private songsChanged = new Subject<string>();
  songsChanged$ = this.songsChanged.asObservable();
  private songs: Song[] = [];

  constructor(private storageService: StorageService) {
    this.songs = this.storageService.load('songs');
  }

  add(song: Song) {
    if (this.songs.push(song)) {
      this.songsChanged.next(song.title);
      this.save();
      return true;
    }
  }

  getAll(): Song[] {
    return this.songs.slice();
  }

  getSongById(id: string): Song {
    return this.songs.find(song => song.id === id);
  }

  delete(IDs: string[]) {
    IDs.forEach(this.deleteOne);
  }

  getSongsByAlbumId(albumId: string): Song[] {
    return this.songs.filter(song => song.albumId === albumId);
  }

  replaceAlbumId(songs: Song[], replacement: string) {
    songs.forEach(song => song.albumId = replacement);
  }

  getIdsWithNoAlbum(): string[] {
    return this.songs
      .filter(song => !song.albumId)
      .map(song => song.id);
  }

  updateSongById(id: string, title: string, artistId: string, albumId: string, track: number, youtube: string) {
    const song = this.getSongById(id);
    if (Object.assign(song, {title, artistId, albumId, track, youtube})) {
      this.songsChanged.next();
      this.save();
      return true;
    }
  }

  get length() {
    return this.songs.length;
  }

  private save() {
    this.storageService.save('songs', this.songs);
  }
}
