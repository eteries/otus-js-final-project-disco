import { Component, OnInit, OnChanges } from '@angular/core';
import { Song } from '../models/Song';
import { SongsService } from '../songs.service';

@Component({
  selector: 'songs-list',
  templateUrl: './songs-list.component.html',
  styleUrls: ['./songs-list.component.scss']
})
export class SongsListComponent implements OnInit {
  songs:Song[] = [];
  private selected: string[] = [];
  checked = {};

  constructor(private songsService: SongsService) {
      songsService.songsChanged$.subscribe(() =>  this.getSongs());
  }

  ngOnInit() {
    this.getSongs();
  }

  toggleItem(id: string) {
    let index= this.selected.indexOf(id);
    if(index !== -1) {
        this.selected.splice(index, 1);
    } else {
        this.selected.push(id);
    }
      console.log(this.checked);
  }

  deleteSelected() {
    this.songsService.delete(this.selected);
    this.selected = [];
  }

  onSubmit(form) {
      this.deleteSelected();
      this.checked = [];
  }

  getSongs() {
      this.songs = this.songsService.getAll();
  }

}
