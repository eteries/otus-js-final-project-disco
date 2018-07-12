import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSongComponent } from './add-song.component';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { AlertSelfclosingComponent } from '../../shared/alert-selfclosing/alert-selfclosing.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

describe('AddSongComponent', () => {
  let component: AddSongComponent;
  let fixture: ComponentFixture<AddSongComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSongComponent, AlertSelfclosingComponent ],
      imports: [ FormsModule, RouterTestingModule, NgbModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
