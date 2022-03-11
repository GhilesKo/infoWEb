import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AccueilComponent } from './composant/accueil/accueil.component';
import { InformationComponent } from './composant/accueil/information/information/information.component';
import { TrustPipe } from './trust.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TrustPipe,
    AccueilComponent,
    InformationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
