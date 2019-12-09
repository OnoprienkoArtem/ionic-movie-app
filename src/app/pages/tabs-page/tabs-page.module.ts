import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { TabsPage } from './tabs-page';
import { TabsPageRoutingModule } from './tabs-page-routing.module';

import { AboutModule } from '../about/about.module';
import { MoviesModule } from '../movies/movies.module';
import { ActorsModule } from '../actors/actors.module';

// import { SessionDetailModule } from '../session-detail/session-detail.module';
// import { SpeakerDetailModule } from '../speaker-detail/speaker-detail.module';


@NgModule({
  imports: [
    AboutModule,
    CommonModule,
    IonicModule,
    MoviesModule,
    // SessionDetailModule,
    // SpeakerDetailModule,
    ActorsModule,
    TabsPageRoutingModule
  ],
  declarations: [
    TabsPage,
  ]
})
export class TabsModule { }
