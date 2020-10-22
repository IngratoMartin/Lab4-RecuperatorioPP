import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  source = "https://www.alfabetajuega.com/wp-content/uploads/2019/09/pokemon-pokedex-pikachu-770x544.jpg";
  constructor() { }

  ngOnInit(): void {
  }

}
