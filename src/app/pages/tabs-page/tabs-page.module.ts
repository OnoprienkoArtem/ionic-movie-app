import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { TabsPage } from './tabs-page';
import { TabsPageRoutingModule } from './tabs-page-routing.module';

import { AboutModule } from '../about/about.module';
import { MovieModule } from '../movie/movie.module';
import { MovieDetailModule } from '../movie-detail/movie-detail.module';
import { PeopleDetailModule } from '../people-detail/people-detail.module';
import { PeopleListModule } from '../people-list/people-list.module';

@NgModule({
  imports: [
    AboutModule,
    CommonModule,
    IonicModule,
    MovieModule,
    MovieDetailModule,
    PeopleDetailModule,
    PeopleListModule,
    TabsPageRoutingModule
  ],
  declarations: [
    TabsPage,
  ]
})
export class TabsModule { }
