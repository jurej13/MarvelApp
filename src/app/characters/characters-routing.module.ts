import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterScreenComponent } from './pages/character-screen/character-screen.component';

const routes: Routes = [
  {
    path:'',children:[
     { path:'',component:CharacterScreenComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharactersRoutingModule { }
