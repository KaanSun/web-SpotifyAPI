import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { MusicDataService } from '../music-data.service';

@Component({
  styleUrls: ['./album.component.css'],
  selector: 'app-album',
  templateUrl: './album.component.html',
})
export class AlbumComponent implements OnInit {

  album : any;

   
    constructor(private snackBar : MatSnackBar, private route: ActivatedRoute, private data: MusicDataService){
    }

    addToFavourites(trackID: string){
      this.data.addToFavourites(trackID).subscribe((success)=>{
        this.snackBar.open("Adding to Favourites...", "Done", { duration: 1500 });
        console.log(success);
      },(error)=>{
        this.snackBar.open("There was an Error","",{duration:1000} );
        console.log(error);
      });
  
    }

    ngOnInit(): void{
      this.route.params.subscribe(params=>{
        let id = params['id'];
        console.log(id);
        this.data.getAlbumById(id).subscribe(data =>{
          this.album = data;
          console.log(this.album);
        })
      
       

      });
    }

}
