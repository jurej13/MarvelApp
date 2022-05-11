import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComicsScreenComponent } from './pages/comics-screen/comics-screen.component';

const routes: Routes = [
  {
    path:'',children:[
      {path:'',component:ComicsScreenComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComicsRoutingModule { }
