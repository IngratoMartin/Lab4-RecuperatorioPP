import { stringify } from '@angular/compiler/src/util';
import { Component, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
  @Input() results = [];
  @Input() count = 0;
  @Input() next = '';
  @Input() previous = '';

  showSpinner=false;

  constructor(private router :Router) { }

  ngOnInit(): void {
    this.loader();
  }

  loader()
  {
    this.showSpinner=true;
    setTimeout(() => {
      this.showSpinner = false;
    }, 3000);
  }

  Detalles(url: string)
  {
    let urlArray = url.split("/");
    let codigo = Number(urlArray[6])
    this.router.navigateByUrl("/detalle/"+codigo);
  }

  Movimientos(url: string)
  {
    let urlArray = url.split("/");
    let codigo = Number(urlArray[6]);
    this.router.navigateByUrl("/movimientos/"+codigo);
  }
}
