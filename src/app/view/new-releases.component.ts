import { Component, OnInit } from '@angular/core';
import { MusicDataService } from '../music-data.service';

@Component({
  selector: 'app-new-releases',
  templateUrl: './new-releases.component.html',
})
export class NewReleasesComponent implements OnInit {


  releases: Array<any> = [];
  private liveReleaseSub: any;
   
    constructor(private data: MusicDataService){}

    ngOnInit(): void{
      this.liveReleaseSub = this.data.getNewReleases().subscribe(data =>{ this.releases = data.albums.items;
      });
    }
    ngOnDestroy(): void{
      this.liveReleaseSub.unsubscribe();
    }

}
