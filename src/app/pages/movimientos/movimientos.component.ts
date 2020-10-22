import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from 'src/app/clases/pokemon';
import { PokemonApiService } from 'src/app/services/pokemon-api.service';

@Component({
  selector: 'app-movimientos',
  templateUrl: './movimientos.component.html',
  styleUrls: ['./movimientos.component.css']
})
export class MovimientosComponent implements OnInit {

  constructor(
    private router :Router,
    private api:PokemonApiService
  ) { }

  miUrl:string= this.router.url;
  urlArray = this.miUrl.split("/");
  codigo = this.urlArray[2];
  pokemon;
  showSpinner:boolean;

  ngOnInit(): void {  
    this.api.getPokemon("https://pokeapi.co/api/v2/pokemon/"+this.codigo).subscribe(pokemon=>{
      this.pokemon = pokemon;
      this.pokemon = new Pokemon(this.pokemon.base_experience, this.pokemon.height, this.pokemon.id, this.pokemon.name, this.pokemon.weight, this.pokemon.abilities, this.pokemon.sprites, this.pokemon.moves);
    })
    this.loader();
  }

  loader()
  {
    this.showSpinner=true;
    setTimeout(() => {
      this.showSpinner = false;
    }, 3000);
  }

  
}
