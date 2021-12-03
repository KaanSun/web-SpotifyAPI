import { Component, OnDestroy, OnInit } from '@angular/core';
import { MusicDataService } from '../music-data.service';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent implements OnInit, OnDestroy {

  favourites: Array<any> = [];
  private liveFavourites: any;

  constructor(private data: MusicDataService) { }

  removeFromFavourites(id:string){
    let check = this.data.removeFromFavourites(id).subscribe(data => {
      this.favourites = data.tracks;
    });
   
  }

  ngOnInit(): void {
    this.liveFavourites = this.data.getFavourites().subscribe(data => {this.favourites = data.tracks
    console.log(this.favourites)});     
  }
  ngOnDestroy(): void{
    this.liveFavourites.unsubscribe();
  }


}