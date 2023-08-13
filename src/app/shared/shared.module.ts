import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AlertComponent } from './alert/alert.component';
import { CardDetailComponent } from './card-detail/card-detail.component';
import { CardComponent } from './card/card.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { TagComponent } from './tag/tag.component';

@NgModule({
  declarations: [
    TagComponent,
    SearchBarComponent,
    CardComponent,
    AlertComponent,
    CardDetailComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [
    SearchBarComponent,
    CardComponent,
    TagComponent,
    ReactiveFormsModule,
    AlertComponent,
  ],
})
export class SharedModule {}
