import { Component, ViewChild, Inject, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, IonList, LoadingController, ModalController, ToastController } from '@ionic/angular';
import { ConferenceData } from '../../providers/conference-data';
import { MovieService } from '../../providers/movie.service';

import { UserData } from '../../providers/user-data';

import { LOCAL_CONFIG } from '../../config/config-api';
import { ApiConfig } from '../../models/api';
import { Subscription } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'page-movie',
  templateUrl: 'movie.html',
  styleUrls: ['./movie.scss'],
})
export class MoviePage implements OnDestroy, OnInit {
  // Gets a reference to the list element
  // @ViewChild('scheduleList', { static: true }) scheduleList: IonList;

  dayIndex = 0;
  queryText = '';
  segment = 'all';
  excludeTracks: any = [];
  shownSessions: any = [];
  groups: any = [];
  confDate: string;
  spinner = false;

  public films: any;
  public favorites: any;
  public imgUrl: string = this.localConfig.smallBackPath;

  private userId = localStorage.getItem('user_id');
  private sessionId = localStorage.getItem('session_id');

  private movieSubscription: Subscription;
  private movieFavoritesSubscription: Subscription;

  movieObject: any;

  firstPart: any;
  secondPart: any;


  constructor(
    public alertCtrl: AlertController,
    public confData: ConferenceData,
    public loadingCtrl: LoadingController,
    public modalCtrl: ModalController,
    public router: Router,
    public toastCtrl: ToastController,
    public user: UserData,
    public movieService: MovieService,
    @Inject(LOCAL_CONFIG) public localConfig: ApiConfig
  ) { }

  ionViewWillEnter() {}

  ngOnInit() {
    this.updateSchedule();
  }

  updateSchedule() {


    // if (this.segment === 'all') {
    //   this.getData('movieDetails');
    //   // console.log('all');
    //   this.movieService.getPopularFilms();
    // }

    // if (this.segment === 'favorites') {
    //   this.getData('movieFavorites');
    //   // console.log('favorites');
    //   this.movieService.getListOfFavoritesFilms(this.userId, this.sessionId, 1);
    // }



      this.movieSubscription = this.movieService.getPopularFilms().subscribe(data => {
        this.movieObject = data;
        console.log(this.movieObject);
        this.firstPart = this.movieObject.results.slice(0, 2);
        this.secondPart = this.movieObject.results.slice(2);
        this.spinner = false;
      });
      this.spinner = true;

    this.movieFavoritesSubscription = this.movieService.getListOfFavoritesFilms(this.userId, this.sessionId, 1).subscribe(data => {
      this.favorites = data;
      this.spinner = false;
    });
    this.spinner = true;


    // this.confData.getTimeline(this.dayIndex, this.queryText, this.excludeTracks, this.segment).subscribe((data: any) => {
    //   this.shownSessions = data.shownSessions;
    //   console.log(data.shownSessions);
    //   this.groups = data.groups;
    // });


  }

  // getData(src) {
  //   this.movieSubscription = this.movieService[src].subscribe(data => {
  //     this.movieObject = data;
  //     // console.log('data 114', data);
  //     this.firstPart = this.movieObject.results.slice(0, 2);
  //     this.secondPart = this.movieObject.results.slice(2);
  //     this.spinner = false;
  //   });
  //   this.spinner = true;
  // }



  async addFavorite(slidingItem: HTMLIonItemSlidingElement, sessionData: any) {
    if (this.user.hasFavorite(sessionData.name)) {
      // woops, they already favorited it! What shall we do!?
      // prompt them to remove it
      this.removeFavorite(slidingItem, sessionData, 'Favorite already added');
    } else {
      // remember this session as a user favorite
      this.user.addFavorite(sessionData.name);

      // create an alert instance
      const alert = await this.alertCtrl.create({
        header: 'Favorite Added',
        buttons: [{
          text: 'OK',
          handler: () => {
            // close the sliding item
            slidingItem.close();
          }
        }]
      });
      // now present the alert on top of all other content
      await alert.present();
    }

  }

  async removeFavorite(slidingItem: HTMLIonItemSlidingElement, sessionData: any, title: string) {
    const alert = await this.alertCtrl.create({
      header: title,
      message: 'Would you like to remove this session from your favorites?',
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
            // they clicked the cancel button, do not remove the session
            // close the sliding item and hide the option buttons
            slidingItem.close();
          }
        },
        {
          text: 'Remove',
          handler: () => {
            // they want to remove this session from their favorites
            this.user.removeFavorite(sessionData.name);
            this.updateSchedule();

            // close the sliding item and hide the option buttons
            slidingItem.close();
          }
        }
      ]
    });
    // now present the alert on top of all other content
    await alert.present();
  }

  async openSocial(network: string, fab: HTMLIonFabElement) {
    const loading = await this.loadingCtrl.create({
      message: `Posting to ${network}`,
      duration: (Math.random() * 1000) + 500
    });
    await loading.present();
    await loading.onWillDismiss();
    fab.close();
  }

  ngOnDestroy() {
    this.movieSubscription.unsubscribe();
    this.movieFavoritesSubscription.unsubscribe();
  }
}
