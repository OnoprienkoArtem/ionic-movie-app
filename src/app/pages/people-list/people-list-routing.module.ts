import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeopleListPage } from './people-list';

const routes: Routes = [
  {
    path: '',
    component: PeopleListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeopleListPageRoutingModule {}
