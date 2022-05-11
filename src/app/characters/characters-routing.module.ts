import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterScreenComponent } from './pages/character-screen/character-screen.component';
import { DetallesCharacterComponent } from './pages/detalles-character/detalles-character.component';

const routes: Routes = [
  {
    path:'',children:[
     { path:'',component:CharacterScreenComponent},
     {path:'details/:id',component:DetallesCharacterComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharactersRoutingModule { }
