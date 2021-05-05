import { Component, OnInit } from '@angular/core';
// starship
import { StarshipService } from 'src/app/services/starship.service';

@Component({
  selector: 'sw-starships-list',
  templateUrl: './starships-list.component.html',
  styleUrls: ['./starships-list.component.scss']
})
export class StarshipsListComponent implements OnInit {

  // starships
  starShips?: any[] = [];
  starship: any[] = [];

  // pilots
  allPilots: any [] = [];
  thePilot: any[] = [];

  constructor(private starshipService: StarshipService) { }

  ngOnInit(){

  this.getAllStarships();

   }

   // method
  getAllStarships() {
    this.starshipService.getStraships()
    .subscribe(
      (data: any) => {
        this.starShips = data.results;
        console.log(this.starShips);
        console.log(this.starShips?.map((e: any) => e = e.url));
      },
      error => {
        console.log(error);
      });
  }

  // pilots
   // method
   getAllPilotss() {
    this.starshipService.getAllPilots()
    .subscribe(
      (data: any) => {
        this.allPilots = data.results;
      },
      error => {
        console.log(error);
      });
  }
}
