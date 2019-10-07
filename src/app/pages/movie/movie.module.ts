import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MoviePage } from './movie';
import { MoviePageRoutingModule } from './movie-routing.module';
import { MovieListComponent } from '../../components/movie-list/movie-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MoviePageRoutingModule
  ],
  declarations: [
    MoviePage,
    MovieListComponent
  ],
  entryComponents: []
})
export class MovieModule { }
