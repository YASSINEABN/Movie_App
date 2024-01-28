import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MovieComponent } from './movie/movie.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { SearchmoviesComponent } from './searchmovies/searchmovies.component';
import { PageDetailsComponent } from './page-details/page-details.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MovieComponent,
    HomeComponent,
    HeaderComponent,
    SearchmoviesComponent,
    PageDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
