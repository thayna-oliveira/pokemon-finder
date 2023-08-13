import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ControlContainer, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: FormGroupDirective,
    },
  ],
})
export class SearchBarComponent {
  @Input() controlName: string;
  @Input() loading: boolean;
  @Input() placeholder: string = 'Search...';
  @Output() onClickEvent = new EventEmitter();

  handleClickEvent(): void {
    this.onClickEvent.emit();
  }
}
