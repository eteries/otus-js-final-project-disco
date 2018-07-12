import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SongVideoComponent } from './song-video.component';
import { NgbModalModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

describe('SongVideoComponent', () => {
  let component: SongVideoComponent;
  let fixture: ComponentFixture<SongVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SongVideoComponent ],
      imports: [ NgbModalModule ],
      providers: [NgbActiveModal]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SongVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
