import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumsListItemComponent } from './albums-list-item.component';
import { RouterModule } from '@angular/router';
import { AppComponent } from '../../app.component';

describe('AlbumsListItemComponent', () => {
  let component: AlbumsListItemComponent;
  let fixture: ComponentFixture<AlbumsListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlbumsListItemComponent ],
      imports: [RouterModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumsListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
