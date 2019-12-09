import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { ActorsPage } from './actors';
import { ActorsRoutingModule } from './actors-routing.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    ActorsRoutingModule
  ],
  declarations: [ActorsPage],
})
export class ActorsModule {}
