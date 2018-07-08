import { Component, OnInit } from '@angular/core';
import { WelcomeModalComponent } from '../welcome-modal/welcome-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  open() {
      //this.modalService.open(WelcomeModalComponent, {windowClass: 'dark-modal'});
      const modalRef = this.modalService.open(WelcomeModalComponent);
  }

}
