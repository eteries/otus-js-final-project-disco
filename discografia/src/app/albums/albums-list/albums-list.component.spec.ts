import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumsListComponent } from './albums-list.component';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { TextFilterPipe } from '../../shared/text-filter/text-filter.pipe';
import { AlbumsListItemComponent } from '../albums-list-item/albums-list-item.component';

describe('AlbumsListComponent', () => {
  let component: AlbumsListComponent;
  let fixture: ComponentFixture<AlbumsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlbumsListComponent, TextFilterPipe, AlbumsListItemComponent ],
      imports: [FormsModule, RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
