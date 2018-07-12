import { Component } from '@angular/core';
import { WelcomeModalComponent } from './welcome-modal/welcome-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SongsService } from "../songs/songs.service";
import { AlbumsService } from "../albums/albums.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  search: string = '';
  view: string = 'songs';

  constructor(private modalService: NgbModal, private songsService: SongsService, private albumsService: AlbumsService) { }

  open() {
      this.modalService.open(WelcomeModalComponent);
  }

  get isEmpty() {
    return !this.songsService.length && !this.albumsService.length;
  }

}
