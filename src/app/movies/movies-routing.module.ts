import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesScreenComponent } from './pages/movies-screen/movies-screen.component';

const routes: Routes = [
  {
    path:'',children:[
      {path:'',component:MoviesScreenComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }
