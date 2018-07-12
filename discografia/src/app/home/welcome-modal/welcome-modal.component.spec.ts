import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeModalComponent } from './welcome-modal.component';
import { NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';

describe('WelcomeModalComponent', () => {
  let component: WelcomeModalComponent;
  let fixture: ComponentFixture<WelcomeModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WelcomeModalComponent ],
      imports: [NgbModule.forRoot()]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
