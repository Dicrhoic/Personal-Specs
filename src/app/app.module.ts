import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PcPartsComponent } from './pc-parts/pc-parts.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { PcPartDetailComponent } from './pc-part-detail/pc-part-detail.component';
import {MatSortModule} from '@angular/material/sort';

@NgModule({
  declarations: [
    AppComponent,
    PcPartsComponent,
    HomeComponent,
    PcPartDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
