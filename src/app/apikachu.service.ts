import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class ApikachuService {

  constructor(private http: HttpClient
  ) {

  }
  getPokemon(number: number): Promise<any> {

    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${number}`).toPromise();
  }
}
