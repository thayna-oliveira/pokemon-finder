import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AlertComponent } from './alert/alert.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { TagComponent } from './tag/tag.component';

@NgModule({
  declarations: [TagComponent, SearchBarComponent, AlertComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [
    SearchBarComponent,
    TagComponent,
    ReactiveFormsModule,
    AlertComponent,
  ],
})
export class SharedModule {}
