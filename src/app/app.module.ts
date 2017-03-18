import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RaicerkLogoComponent } from './raicerk-logo/raicerk-logo.component';
import { ApiRestComponent } from './api-rest/api-rest.component';

@NgModule({
  declarations: [
    AppComponent,
    RaicerkLogoComponent,
    ApiRestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
