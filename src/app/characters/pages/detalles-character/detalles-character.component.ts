import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { Result } from '../../interfaces/characters.interface';
import { CharacterService } from '../../services/character.service';

@Component({
  selector: 'app-detalles-character',
  templateUrl: './detalles-character.component.html',
  styleUrls: ['./detalles-character.component.css']
})
export class DetallesCharacterComponent implements OnInit {
  character !: Result 
  constructor(private route : ActivatedRoute,
    private characterService : CharacterService) { }

  ngOnInit(): void {
    this.route.params.pipe(
      switchMap(({id})=>this.characterService.getCharacterById(id))
    ).subscribe(
      resp=> this.character=resp.data.results[0]
    )
  }

}
