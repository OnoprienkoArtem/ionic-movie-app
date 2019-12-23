import { Component, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../../providers/movie.service';
import { LOCAL_CONFIG } from '../../config/config-api';
import { ApiConfig } from '../../models/api';

@Component({
  selector: 'page-actor-detail',
  templateUrl: 'actor-detail.html',
  styleUrls: ['./actor-detail.scss'],
})
export class ActorDetailPage {

  defaultHref = '';
  public actorDetails: any;
  public imgUrl: string = this.localConfig.midImgPath;
  public logo_path: any[];

  constructor(
    private route: ActivatedRoute,
    public movieService: MovieService,
    @Inject(LOCAL_CONFIG) public localConfig: ApiConfig
  ) { }

  ionViewWillEnter() {



  }
}
