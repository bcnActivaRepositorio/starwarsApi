import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// starship
import { StarshipService } from 'src/app/services/starship.service';

@Component({
  selector: 'sw-starships-list',
  templateUrl: './starships-list.component.html',
  styleUrls: ['./starships-list.component.scss']
})
export class StarshipsListComponent implements OnInit {

  starships?: any[] = [];

  constructor(private starshipService: StarshipService,
              private router: Router) { }

  ngOnInit(){
    this.starshipService.getStraships()
    .subscribe(
      (data: any) => {
        this.starships = data.results;
        console.log(this.starships);
      },
      error => {
        console.log(error);
      }
    );
  }

}
