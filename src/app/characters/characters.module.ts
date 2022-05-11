import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharactersRoutingModule } from './characters-routing.module';
import { CharacterScreenComponent } from './pages/character-screen/character-screen.component';
import { RouterModule } from '@angular/router';
import { CardComponent } from './components/card/card.component';


@NgModule({
  declarations: [
    CharacterScreenComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    CharactersRoutingModule
  ]
})
export class CharactersModule { }
