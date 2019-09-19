import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MoviePage } from './movie';

const routes: Routes = [
  {
    path: '',
    component: MoviePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviePageRoutingModule { }
