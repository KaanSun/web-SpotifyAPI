import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavouritesComponent } from './favourites/favourites.component';
import { GuardAuthService } from './guard-auth.service';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SearchResultComponent } from './search-result/search-result.component';

import { AboutComponent } from './view/about.component';
import { AlbumComponent } from './view/album.component';
import { ArtistDiscographyComponent } from './view/artist-discography.component';
import { NewReleasesComponent } from './view/new-releases.component';
import { NotFoundComponent } from './view/not-found.component';


const routes: Routes = [
{ path: 'newReleases', component: NewReleasesComponent ,canActivate: [GuardAuthService] },
{ path: 'artist/:id', component: ArtistDiscographyComponent ,canActivate: [GuardAuthService]},
{ path: 'album/:id', component: AlbumComponent ,canActivate: [GuardAuthService]},
{ path: 'about', component: AboutComponent ,canActivate: [GuardAuthService]},
{ path: '', redirectTo: '/newReleases',pathMatch: 'full'},
{ path: 'search', component: SearchResultComponent,canActivate: [GuardAuthService]},
{ path: 'favourites', component:FavouritesComponent,canActivate: [GuardAuthService]},
{ path: 'register', component: RegisterComponent},
{ path: 'login', component: LoginComponent},
{ path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
