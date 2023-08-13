import { animate, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, Input, Output } from '@angular/core';
@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
  animations: [
    trigger('fade', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('250ms', style({ opacity: 0.5 })),
      ]),
      transition(':leave', [animate('500ms', style({ opacity: 0 }))]),
    ]),
  ],
})
export class AlertComponent {
  @Input() title: string;
  @Input() description: string;
  @Output() onCloseEvent = new EventEmitter();

  handleClickEvent(): void {
    this.onCloseEvent.emit();
  }
}
