import { Component, OnInit, Input } from '@angular/core';
import { ArtistsService } from '../../artists/artists.service';
import { AlbumsService } from '../../albums/albums.service';
import { SongVideoComponent } from '../song-video/song-video.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'song-list-item',
  templateUrl: './song-list-item.component.html',
  styleUrls: ['./song-list-item.component.scss']
})
export class SongListItemComponent implements OnInit {

  @Input()
  song: object;

  constructor(public albumService: AlbumsService, public artistsService: ArtistsService, private modalService: NgbModal) {
  }

  ngOnInit() {
  }

  open(id: string, song: string, artist: string) {
    const modalRef = this.modalService.open(SongVideoComponent);
    modalRef.componentInstance.id = id;
    modalRef.componentInstance.song = song;
    modalRef.componentInstance.artist = artist;
  }

}
