import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ThumbnailComponent } from './components/thumbnail/thumbnail.component';
import { GridThumbnailComponent } from './components/grid-thumbnail/grid-thumbnail.component';
import { DiscoverMovieComponent } from './pages/discover-movie/discover-movie.component';

@NgModule({
  declarations: [
    AppComponent,
    ThumbnailComponent,
    GridThumbnailComponent,
    DiscoverMovieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    ThumbnailComponent,
    GridThumbnailComponent,
    DiscoverMovieComponent
  ]
})
export class AppModule { }
