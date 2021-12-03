import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MusicDataService } from '../music-data.service';

@Component({
  selector: 'app-artist-descography',
  templateUrl: './artist-discography.component.html',
})
export class ArtistDiscographyComponent implements OnInit {

  albums : Array<any> =[];
  artists : any;



    applyStyles(){

      var backgroundImage;
      
      backgroundImage = `url(${this.artists.images[0].url}) no-repeat center center`;
      return backgroundImage;

    }  
   
    constructor(private data : MusicDataService, private route: ActivatedRoute){}

    ngOnInit(): void{
        
    
        this.route.params.subscribe(params=>{
          let id = params['id'];
          this.data.getArtistById(id).subscribe(data =>{ this.artists = data;
            console.log(this.artists);});
          this.data.getAlbumsByArtistId(id).subscribe(data =>{
            var albumNames = new Array;
            this.albums = data.items.filter((c:any, index:any) => {          /////////////dikkat patlamasin
              if(!albumNames.includes(c.name)){
                albumNames.push(c.name)
                return true;
              }else{
                return false;
              };
          });
          console.log(this.albums);
            })
        });


    }

}
