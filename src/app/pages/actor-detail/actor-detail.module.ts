import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActorDetailPage } from './actor-detail';
import { ActorDetailPageRoutingModule } from './actor-detail-routing.module';
import { IonicModule } from '@ionic/angular';

import { NgCircleProgressModule } from 'ng-circle-progress';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    ActorDetailPageRoutingModule,
    NgCircleProgressModule.forRoot()
  ],
  declarations: [
    ActorDetailPage,
  ]
})
export class ActorDetailModule { }
