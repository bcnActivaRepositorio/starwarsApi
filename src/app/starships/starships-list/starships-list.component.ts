import { Component, OnInit } from '@angular/core';
// starship
import { StarshipService } from 'src/app/services/starship.service';

@Component({
  selector: 'sw-starships-list',
  templateUrl: './starships-list.component.html',
  styleUrls: ['./starships-list.component.scss']
})
export class StarshipsListComponent implements OnInit {

  starShips?: any[] = [];
  starship: any[] = [];
  constructor(private starshipService: StarshipService) { }

  ngOnInit(){

  this.getAllStarships();

   }

   // methods
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

}
