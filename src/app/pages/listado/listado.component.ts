import { Component, Input, OnInit } from '@angular/core';
import { PokemonApiService } from 'src/app/services/pokemon-api.service';

interface Data{
  next: string;
  previous: string;
  count: number;
  results: Array<any>;
}

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  previous: string;
  next: string;
  results = [];
  count: number;
  constructor(private datos:PokemonApiService) { }

  ngOnInit(): void {
    this.datos.getPokemon()
    .subscribe((data: Data)=>{
      this.previous=data.previous;
      this.next=data.next;
      this.count=data.count;
      this.results=data.results;
    });
  }

}
