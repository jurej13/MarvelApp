import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Heroe, Result } from '../interfaces/characters.interface';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  apiKey : string = environment.publicApiKey
  ts :number = environment.ts
  hash : string = environment.hash
  url : string = environment.baseUrl
  baseUrl: string = `${this.url}/characters`
  constructor(private http: HttpClient) { }

  getCharacters() : Observable<Heroe>{
    const limit = '&limit=10'
    const urlApi= this.baseUrl+`?apikey=${this.apiKey}&ts=${this.ts}&hash=${this.hash}&${limit}`
    return this.http.get<Heroe>(urlApi)
  }
  getCharacterById(id : number) : Observable<Heroe>{
    const urlApi=this.baseUrl+`/${id}?apikey=${this.apiKey}&ts=${this.ts}&hash=${this.hash}`
    return this.http.get<Heroe>(urlApi)
  }
  
}
