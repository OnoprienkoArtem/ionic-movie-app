import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieDetailPage } from './movie-detail';
import { MovieDetailPageRoutingModule } from './movie-detail-routing.module';
import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    MovieDetailPageRoutingModule
  ],
  declarations: [
    MovieDetailPage,
  ]
})
export class MovieDetailModule { }
