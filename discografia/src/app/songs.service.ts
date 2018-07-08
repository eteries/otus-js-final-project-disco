import { Injectable } from '@angular/core';
import { Song } from './models/Song';
import { Subject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class SongsService {
    private songsChanged = new Subject<string>();
    songsChanged$ = this.songsChanged.asObservable();

    private songs: Song[] = [
        new Song('1', '2018.07.05', 'Money Money Money', 'Abba', 'The Best', 'http://youtube.com')
    ];

    constructor() {
        const stored = localStorage.getItem('songs');
        this.songs = stored ? JSON.parse(stored) : [];
    }

    add(song: Song) {
        if(this.songs.push(song)) {
            this.songsChanged.next(song.title);
            this.save();
            return true;
        }
    }

    private save() {
        localStorage.setItem('songs', JSON.stringify(this.songs));
    }


    getAll(): Song[] {
        return this.songs.slice();
    }

    delete(IDs: string[]) {
        IDs.forEach(this.deleteOne);
    }

    deleteOne = (id) => {
        const index = this.songs.findIndex(song => song.id === id);
        this.songs.splice(index, 1);
        this.songsChanged.next();
        this.save();
    }
}
