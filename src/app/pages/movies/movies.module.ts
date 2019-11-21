import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { MoviesPage } from './movies';
import { MoviesPageRoutingModule } from './movies-routing.module';

@NgModule({
    imports: [CommonModule, FormsModule, IonicModule, MoviesPageRoutingModule],
    declarations: [MoviesPage],
    entryComponents: []
})
export class MoviesModule {}
