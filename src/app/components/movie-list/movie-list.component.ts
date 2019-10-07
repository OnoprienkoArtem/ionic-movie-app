import { Component, OnInit, Input, Inject } from '@angular/core';
import { LOCAL_CONFIG } from '../../config/config-api';
import { ApiConfig } from '../../models/api';

@Component({
  selector: 'movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
})
export class MovieListComponent implements OnInit {

  @Input('data') movieObject;

  public imgUrl: string = this.localConfig.smallBackPath;

  constructor( @Inject(LOCAL_CONFIG) public localConfig: ApiConfig) { }

  ngOnInit() {}

}
