import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'alert-selfclosing',
  templateUrl: './alert-selfclosing.component.html',
  styleUrls: ['./alert-selfclosing.component.scss']
})
export class AlertSelfclosingComponent implements OnInit {
    private _message: string = '';
    private _isActive: boolean = false;

    @Input()
    set message(message: string) {
        this._message = message;
    }

    @Input()
    set isActive(isActive: boolean) {
        this._isActive = isActive;
        if (this._isActive) {
            setTimeout(() => this._isActive = false, 3000)
        }
    }

    ngOnInit(): void {
        setTimeout(() => this.isActive = false, 20000);
    }

    get isActive() {
        return this._isActive;
    }

    get message() {
        return this._message;
    }

}
