import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SongListItemComponent } from './song-list-item.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbModalStack } from '@ng-bootstrap/ng-bootstrap/modal/modal-stack';

describe('SongListItemComponent', () => {
  let component: SongListItemComponent;
  let fixture: ComponentFixture<SongListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SongListItemComponent ],
      imports: [ NgbModule ],
      providers: [NgbModalStack]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SongListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
