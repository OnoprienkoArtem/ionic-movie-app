import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActorDetailPage } from './actor-detail';
import { ActorDetailPageRoutingModule } from './actor-detail-routing.module';
import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    ActorDetailPageRoutingModule
  ],
  declarations: [
    ActorDetailPage,
  ]
})
export class ActorDetailModule { }
