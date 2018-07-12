import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'song-video',
  templateUrl: './song-video.component.html',
  styleUrls: ['./song-video.component.scss']
})
export class SongVideoComponent implements OnInit {

  @Input() public id: string;

  public link: SafeResourceUrl;

  constructor(public modal: NgbActiveModal, private sanitizer: DomSanitizer) {}

  ngOnInit() {
      this.link = this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${this.id}?autoplay=1`);
  }
}
