import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertSelfclosingComponent } from './alert-selfclosing.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

describe('AlertSelfclosingComponent', () => {
  let component: AlertSelfclosingComponent;
  let fixture: ComponentFixture<AlertSelfclosingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertSelfclosingComponent ],
      imports: [ NgbModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertSelfclosingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
