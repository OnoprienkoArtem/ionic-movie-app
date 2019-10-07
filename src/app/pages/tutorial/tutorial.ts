import { Component, OnInit, OnDestroy, ViewChild, ViewEncapsulation, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from '../../providers/movie.service';
import { LOCAL_CONFIG } from '../../config/config-api';
import { ApiConfig } from '../../models/api';

import { MenuController, IonSlides } from '@ionic/angular';

import { Storage } from '@ionic/storage';
import { Subscription } from 'rxjs';

@Component({
  selector: 'page-tutorial',
  templateUrl: 'tutorial.html',
  styleUrls: ['./tutorial.scss'],
})
export class TutorialPage implements OnInit, OnDestroy {

  public imgUrl: string = this.localConfig.midImgPath;
  showSkip = true;
  public films: any[] = [];
  public filmsClone: any[] = [];
  public actors: any[] = [];
  public actorsClone: any[] = [];
  private movieSubscription: Subscription;

  @ViewChild('slides', { static: true }) slides: IonSlides;

  constructor(
    public menu: MenuController,
    public router: Router,
    public storage: Storage,
    private movieService: MovieService,
    @Inject(LOCAL_CONFIG) public localConfig: ApiConfig
  ) {}

  ngOnInit() {

    this.movieSubscription = this.movieService.movieDetails.subscribe(data => {
      this.filmsClone = data.results;
      this.films = this.filmsClone.slice(0, 9);
    });
    this.movieService.getPopularFilms();


    // this.movieService.getPopularFilms().subscribe(
    //   (filmList: any) => {
    //     this.filmsClone = filmList.results;
    //     this.films = this.filmsClone.slice(0, 9);
    //   },
    //   err => console.log('error', err)
    // );

    this.movieService.getPopularActors().subscribe(
      (actorsList: any) => {
        console.log(actorsList);
        this.actorsClone = actorsList.results;
        this.actors = this.actorsClone.slice(0, 9);
      },
      err => console.log('error', err)
    );
  }

  startApp() {
    return this.router.navigateByUrl('/app/tabs/movie');
    // this.router
    //   .navigateByUrl('/app/tabs/movie')
    //   .then(() => this.storage.set('ion_did_tutorial', true));
  }

  onSlideChangeStart(event) {
    event.target.isEnd().then(isEnd => {
      this.showSkip = !isEnd;
    });
  }

  ionViewWillEnter() {
    this.storage.get('ion_did_tutorial').then(res => {
      if (res === true) {
        this.router.navigateByUrl('/app/tabs/movie');
      }
    });

    this.menu.enable(false);
  }

  ionViewDidLeave() {
    // enable the root left menu when leaving the tutorial page
    this.menu.enable(true);
  }

  ngOnDestroy() {
    this.movieSubscription.unsubscribe();
  }
}
