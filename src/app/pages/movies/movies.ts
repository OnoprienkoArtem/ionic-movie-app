import { Component, ViewChild, OnInit, OnDestroy, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, IonList, LoadingController, ModalController, ToastController, Config } from '@ionic/angular';

import { ConferenceData } from '../../providers/conference-data';
import { UserData } from '../../providers/user-data';

import { MovieService } from '../../providers/movie.service';
import { LOCAL_CONFIG } from '../../config/config-api';
import { ApiConfig } from '../../models/api';
import { Subscription } from 'rxjs';

@Component({
  selector: 'page-movies',
  templateUrl: 'movies.html',
  styleUrls: ['./movies.scss'],
})
export class MoviesPage implements OnInit, OnDestroy {

  @ViewChild('scheduleList', { static: true }) scheduleList: IonList;

  private movieSubscription: Subscription;
  private movieFavoritesSubscription: Subscription;
  private userId = localStorage.getItem('user_id');
  private sessionId = localStorage.getItem('session_id');
  public segment = 'all';
  public imgUrl: string = this.localConfig.smallBackPath;
  public movieObject: any;
  public firstPart: any;
  public secondPart: any;
  public favoritesObj: any;
  public firstFavoritePart: any;
  public secondFavoritePart: any;
  public spinner = false;

  constructor(
    public alertCtrl: AlertController,
    public confData: ConferenceData,
    public loadingCtrl: LoadingController,
    public modalCtrl: ModalController,
    public router: Router,
    public toastCtrl: ToastController,
    public user: UserData,
    public config: Config,
    public movieService: MovieService,
    @Inject(LOCAL_CONFIG) public localConfig: ApiConfig
  ) { }

  ngOnInit() {
    this.updateSchedule();
  }

  updateSchedule() {
    this.movieSubscription = this.movieService.getPopularFilms()
      .subscribe(data => {
        this.movieObject = data;
        console.log(this.movieObject);
        this.firstPart = this.movieObject.results.slice(0, 2);
        this.secondPart = this.movieObject.results.slice(2);
        this.spinner = false;
      });
    this.spinner = true;

    this.movieFavoritesSubscription = this.movieService.getListOfFavoritesFilms(this.userId, this.sessionId, 1)
      .subscribe(data => {
        this.favoritesObj = data;
        console.log(this.movieObject);
        this.firstFavoritePart = this.favoritesObj.results.slice(0, 2);
        this.secondFavoritePart = this.favoritesObj.results.slice(2);
        this.spinner = false;
      });
    this.spinner = true;
  }

  ngOnDestroy() {
    this.movieSubscription.unsubscribe();
    this.movieFavoritesSubscription.unsubscribe();
  }
}
