import { Component, OnInit } from '@angular/core';
import { ApikachuService } from '../apikachu.service';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss']
})
export class PokedexComponent implements OnInit {
  num: number = 9
  listaPokes: any = [];
  async getPokemon() {
    for (let index = 0; index < this.num; index++) {

      await this.api.getPokemon(index + 1).then((info: any) => this.listaPokes.push(info), (error: any) => console.log(error));
    }
    console.log(this.listaPokes);


  }
  constructor(
    private api: ApikachuService
  ) { }
  ngOnInit(): void {
    this.getPokemon()

  }


}
