import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Heroe } from '../interfaces/characters.interface';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  apiKey : string = environment.publicApiKey
  ts :number = environment.ts
  hash : string = environment.hash
  url : string = environment.baseUrl
  baseUrl: string = `${this.url}/characters?apikey=${this.apiKey}&ts=${this.ts}&hash=${this.hash}`
  constructor(private http: HttpClient) { }

  getCharacters() : Observable<Heroe>{
    const limit = '&limit=10'
    const urlApi= this.baseUrl+`${limit}`
    return this.http.get<Heroe>(urlApi)
  }
  
}
