import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { WorksComponent } from './works/works.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card'

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomePageComponent,
    WorksComponent,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
