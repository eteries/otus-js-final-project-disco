import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SongsListComponent } from './songs-list/songs-list.component';
import { SongListItemComponent } from './song-list-item/song-list-item.component';
import { WelcomeModalComponent } from './welcome-modal/welcome-modal.component';
import { RouterModule, Routes } from '@angular/router';
import { AddSongComponent } from './add-song/add-song.component';
import { AddAlbumComponent } from './add-album/add-album.component';
import { HomeComponent } from './home/home.component';
import { AlertSelfclosingComponent } from './shared/alert-selfclosing/alert-selfclosing.component';
import { FileDropModule } from 'ngx-file-drop';
import { ImageDropComponent } from './shared/image-drop/image-drop.component';

const routes: Routes = [
    {path: 'song/add', component: AddSongComponent},
    {path: 'album/add', component: AddAlbumComponent},
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
        ImageDropComponent
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
        AlertSelfclosingComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
