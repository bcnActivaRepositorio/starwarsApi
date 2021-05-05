import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
// starship
import { StarshipService } from 'src/app/services/starship.service';
import { Starship } from '../models/starship.model';

@Component({
  selector: 'sw-starships-list',
  templateUrl: './starships-list.component.html',
  styleUrls: ['./starships-list.component.scss']
})
export class StarshipsListComponent implements OnInit {

  starships?: any[] = [];

  constructor(private starshipService: StarshipService) { }

  ngOnInit(){
    this.starshipService.getStraships()
    .subscribe(
      (data: any) => {
        this.starships = data;
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }

}
