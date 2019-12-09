import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'actors',
  templateUrl: 'actors.html',
  styleUrls: ['./actors.scss'],
})
export class ActorsPage {
  speakers: any[] = [];

  constructor(
    public router: Router
  ) {}

  ionViewDidEnter() {

  }






}
