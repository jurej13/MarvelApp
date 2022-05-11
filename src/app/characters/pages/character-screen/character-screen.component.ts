import { Component, OnInit } from '@angular/core';
import { Result } from '../../interfaces/characters.interface';
import { CharacterService } from '../../services/character.service';

@Component({
  selector: 'app-character-screen',
  templateUrl: './character-screen.component.html',
  styleUrls: ['./character-screen.component.css']
})
export class CharacterScreenComponent implements OnInit {

  characters : Result[] = []
  constructor(private characterService : CharacterService) { }

  ngOnInit(): void {
    this.characterService.getCharacters()
      .subscribe(resp =>{
        this.characters = resp.data.results
        console.log(resp)
      })
  }

}
