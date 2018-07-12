import { Component, Input } from '@angular/core';
import { ArtistsService } from '../../artists/artists.service';
import { AlbumsService } from '../albums.service';

@Component({
  selector: 'albums-list-item',
  templateUrl: './albums-list-item.component.html',
  styleUrls: ['./albums-list-item.component.scss']
})
export class AlbumsListItemComponent {

  @Input()
  album: object;

  constructor(public albumService: AlbumsService, public artistsService: ArtistsService) {
  }

}
