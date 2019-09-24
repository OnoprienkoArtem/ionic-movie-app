import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { PeopleListPage } from './people-list';
import { PeopleListPageRoutingModule } from './people-list-routing.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    PeopleListPageRoutingModule
  ],
  declarations: [PeopleListPage],
})
export class PeopleListModule {}
