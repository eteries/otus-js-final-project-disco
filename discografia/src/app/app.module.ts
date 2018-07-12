import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SongsListComponent } from './songs/songs-list/songs-list.component';
import { SongListItemComponent } from './songs/song-list-item/song-list-item.component';
import { WelcomeModalComponent } from './home/welcome-modal/welcome-modal.component';
import { RouterModule, Routes } from '@angular/router';
import { AddSongComponent } from './songs/add-song/add-song.component';
import { AddAlbumComponent } from './albums/add-album/add-album.component';
import { HomeComponent } from './home/home.component';
import { AlertSelfclosingComponent } from './shared/alert-selfclosing/alert-selfclosing.component';
import { FileDropModule } from 'ngx-file-drop';
import { ImageDropComponent } from './shared/image-drop/image-drop.component';
import { TextFilterPipe } from './shared/text-filter/text-filter.pipe';
import { AlbumsListComponent } from './albums/albums-list/albums-list.component';
import { AlbumsListItemComponent } from './albums/albums-list-item/albums-list-item.component';
import { AlbumViewComponent } from './albums/album-view/album-view.component';
import { SortPipe } from './shared/sort-pipe/sort.pipe';
import { SongVideoComponent } from './songs/song-video/song-video.component';

const routes: Routes = [
  {path: 'song/add', component: AddSongComponent},
  {path: 'song/edit/:id', component: AddSongComponent},
  {path: 'album/add', component: AddAlbumComponent},
  {path: 'album/view/:id', component: AlbumViewComponent},
  {path: 'album/edit/:id', component: AddAlbumComponent},
  {path: '', component: HomeComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    SongsListComponent,
    SongListItemComponent,
    WelcomeModalComponent,
    AddSongComponent,
    AddAlbumComponent,
    HomeComponent,
    AlertSelfclosingComponent,
    ImageDropComponent,
    TextFilterPipe,
    AlbumsListComponent,
    AlbumsListItemComponent,
    AlbumViewComponent,
    SortPipe,
    SongVideoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(routes),
    FileDropModule
  ],
  providers: [],
  entryComponents: [
    WelcomeModalComponent,
    SongVideoComponent,
    AlertSelfclosingComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
