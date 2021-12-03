/*********************************************************************************
* WEB422 – Assignment 05
* I declare that this assignment is my own work in accordance with Seneca Academic Policy. No part of this
* assignment has been copied manually or electronically from any other source (including web sites) or
* distributed to other students.
*
* Name: Kaan Sun____ Student ID: 103077202__ Date: 2021-11-05___
*
********************************************************************************/ 

import { Component , OnInit } from '@angular/core';
import { NavigationStart, Router, Event  } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  searchString : string ='';
  public token: any;

  constructor(private router: Router, private a :AuthService){}

  handleSearch(){
    this.router.navigate(['/search'], { queryParams: { q: this.searchString }});
    console.log(this.searchString);
    this.searchString = ''; 
  }
  ngOnInit(): void {
    this.router.events.subscribe((event : Event) => {
      if (event instanceof NavigationStart) { 
        this.token = this.a.readToken();
      }
    });
  }
  
  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
  title = 'web422-a4';

  
}
