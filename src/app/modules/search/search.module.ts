import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { SearchRoutingModule } from './search-routing.module';

@NgModule({
  declarations: [SearchPageComponent],
  imports: [CommonModule, SharedModule, SearchRoutingModule, FormsModule],
})
export class SearchModule {}
