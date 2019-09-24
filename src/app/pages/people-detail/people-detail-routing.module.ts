import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PeopleDetailPage } from './people-detail';

const routes: Routes = [
  {
    path: '',
    component: PeopleDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeopleDetailPageRoutingModule { }
