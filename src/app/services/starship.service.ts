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
  // pilots
  private urlPilots: string = "people/"


  constructor( private httpClient: HttpClient) { }



  // methods

  // get them all
getStraships(){
  return this.httpClient.get<Starship[]>(`${this.ROOT_URL}${this.urlStarships}`);
}

getAllPilots() {
  return this.httpClient.get<Starship[]>(`${this.ROOT_URL}${this.urlPilots}`);
}
// get this just one
getOneStarship(id: number) {
  return  this.httpClient.get<Starship[]>(`${this.ROOT_URL}${this.urlStarships}:${id}`);

}
getOnePilot(id: number) {
  return  this.httpClient.get<Starship[]>(`${this.ROOT_URL}${this.urlPilots}:${id}`);
}

}
