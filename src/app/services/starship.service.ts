import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// model
import { Starship } from '../starships/models/starship.model';


@Injectable({
  providedIn: 'root'
})
export class StarshipService {

  // url main root api
  private ROOT_URL: string = "https://swapi.dev/api/";
  // starships
  private urlStarships: string = "starships/"
  // movies
  private urlMovies: string = "films/"


  constructor( private httpClient: HttpClient) { }



  // methods

  // get them all
getStraships(){
  return this.httpClient.get<Starship[]>(`${this.ROOT_URL}${this.urlStarships}`);
}
// get this just one
getOneStarship(id: number) {
  console.log( this.httpClient.get<Starship[]>(`${this.ROOT_URL}${this.urlStarships}${id}`));
  return  this.httpClient.get<Starship[]>(`${this.ROOT_URL}${this.urlStarships}${id}`);

}

}
