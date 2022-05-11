import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
  path:'characters',
  loadChildren:()=> import('./characters/characters.module').then(m => m.CharactersModule)  
  },
  {
    path:'movies',
    loadChildren:()=>import('./movies/movies.module').then(m=> m.MoviesModule)
  },
  {
    path:'comics',
    loadChildren:()=>import('./comics/comics.module').then(m=>m.ComicsModule)
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
