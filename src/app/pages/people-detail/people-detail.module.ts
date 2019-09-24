import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeopleDetailPage } from './people-detail';
import { PeopleDetailPageRoutingModule } from './people-detail-routing.module';
import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    PeopleDetailPageRoutingModule
  ],
  declarations: [
    PeopleDetailPage,
  ]
})
export class PeopleDetailModule { }
