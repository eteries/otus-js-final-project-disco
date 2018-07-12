import { Injectable } from '@angular/core';
import { Album } from './Album';
import { Subject } from "rxjs/index";
import { StorageService } from '../shared/storage.service';
import { UtilsService } from "../shared/utils.service";

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {
  deleteOne = (id) => {
    const index = this.albums.findIndex(album => album.albumId === id);
    this.albums.splice(index, 1);
    this.albumsChanged.next();
    this.save();
  };
  private albumsChanged = new Subject<string>();
  albumsChanged$ = this.albumsChanged.asObservable();
  private albums: Album[] = [];

  constructor(private storageService: StorageService, private utils: UtilsService) {
    this.albums = this.storageService.load('albums');
  }

  getAllByArtistId(artistId: string): Album[] {
    return this.albums.filter(album => album.artistId === artistId);
  }

  getAll(): Album[] {
    return this.albums.slice();
  }

  addAlbum(title: string, artistId: string, year: string, image: string) {
    const album = new Album(this.utils.generateId(), new Date().toString(), title, artistId, year, image);
    if (this.albums.push(album)) {
      this.albumsChanged.next(album.title);
      this.save();
      return true;
    }
  }

  updateAlbum(id: string, title: string, artistId: string, year: string, image: string) {
    const album = this.getAlbumById(id);
    if (Object.assign(album, {title, artistId, year, image})) {
      this.albumsChanged.next();
      this.save();
      return true;
    }
  }

  delete(IDs: string[]) {
    IDs.forEach(this.deleteOne);
  }

  getAlbumByProps(title: string, artistId: string, year: string): Album | undefined {
    const all = this.getAllByArtistId(artistId);
    if (!all.length) return;

    const withThisName = all.filter(album => album.title.toLowerCase() === title.toLowerCase());
    if (!withThisName.length) return;

    return withThisName.find(album => album.year === year);
  }

  getAlbumById(id: string) {
    return this.albums.find(album => album.albumId === id);
  }

  get length() {
    return this.albums.length;
  }

  private save() {
    this.storageService.save('albums', this.albums);
  }
}
