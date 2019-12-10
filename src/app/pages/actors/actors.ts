import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { MovieService } from '../../providers/movie.service';
import { LOCAL_CONFIG } from '../../config/config-api';
import { ApiConfig } from '../../models/api';
@Component({
  selector: 'actors',
  templateUrl: 'actors.html',
  styleUrls: ['./actors.scss'],
})
export class ActorsPage implements OnInit, OnDestroy {

  private actorsSubscription: Subscription;
  public imgUrl: string = this.localConfig.smallBackPath;
  public movieObject: any;
  public firstPart: any;
  public secondPart: any;
  public spinner = false;

  constructor(
    @Inject(LOCAL_CONFIG) public localConfig: ApiConfig,
    public router: Router,
    public movieService: MovieService
  ) { }

  ngOnInit() {
    this.actorsSubscription = this.movieService.getPopularActors()
      .subscribe(data => {
        console.log('actors =====>>>', data);
        this.movieObject = data;
        
        this.firstPart = this.movieObject.results.slice(0, 2);
        this.secondPart = this.movieObject.results.slice(2);
        this.spinner = false;
      });

  }

  ngOnDestroy() {
    this.actorsSubscription.unsubscribe();
  }




}
