import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ActorsPage } from './actors';
const routes: Routes = [
  {
    path: '',
    component: ActorsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActorsRoutingModule {}
