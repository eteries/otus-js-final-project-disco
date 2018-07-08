import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'welcome-modal',
  templateUrl: './welcome-modal.component.html',
  styleUrls: ['./welcome-modal.component.scss']
})
export class WelcomeModalComponent implements OnInit {

  constructor(public modal: NgbActiveModal, private router: Router) { }

  ngOnInit() {
  }

  goAddAlbum() {
      this.modal.close();
      this.router.navigate(['album/add']);
  }

  goAddSong() {
      this.modal.close();
      this.router.navigate(['song/add']);
  }

}
