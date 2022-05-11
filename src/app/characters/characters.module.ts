import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharactersRoutingModule } from './characters-routing.module';
import { CharacterScreenComponent } from './pages/character-screen/character-screen.component';
import { RouterModule } from '@angular/router';
import { CardComponent } from './components/card/card.component';
import { DetallesCharacterComponent } from './pages/detalles-character/detalles-character.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CharacterScreenComponent,
    CardComponent,
    DetallesCharacterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    CharactersRoutingModule
  ]
})
export class CharactersModule { }
