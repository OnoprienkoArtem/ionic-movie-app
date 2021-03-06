import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ActorDetailPage } from './actor-detail';

const routes: Routes = [
  {
    path: '',
    component: ActorDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActorDetailPageRoutingModule { }
