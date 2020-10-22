import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class PokemonApiService {

  constructor(private htpp:HttpService) { }

  getPokemon(url = "https://pokeapi.co/api/v2/pokemon/?limit=1050")
  {
    return this.htpp.get(url);
  }
}
