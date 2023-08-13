import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
})
export class AlertComponent {
  @Input() title: string;
  @Input() description: string;
  @Output() onCloseEvent = new EventEmitter();

  handleClickEvent(): void {
    this.onCloseEvent.emit();
  }
}
