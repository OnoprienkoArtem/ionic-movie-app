import { Component, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserData } from '../../providers/user-data';
import { MovieService } from '../../providers/movie.service';
import { LOCAL_CONFIG } from '../../config/config-api';
import { ApiConfig } from '../../models/api';

@Component({
  selector: 'page-movie-detail',
  styleUrls: ['./movie-detail.scss'],
  templateUrl: 'movie-detail.html'
})
export class MovieDetailPage {
  session: any;
  isFavorite = false;
  defaultHref = '';
  public movieDetails: any[];
  constructor(    
    private userProvider: UserData,
    private route: ActivatedRoute,
    public movieService: MovieService,
    @Inject(LOCAL_CONFIG) public localConfig: ApiConfig
  ) {}

  sessionClick(item: string) {
    console.log('Clicked', item);
  }

  toggleFavorite() {
    if (this.userProvider.hasFavorite(this.session.name)) {
      this.userProvider.removeFavorite(this.session.name);
      this.isFavorite = false;
    } else {
      this.userProvider.addFavorite(this.session.name);
      this.isFavorite = true;
    }
  }

  ionViewWillEnter() {

    const movieId = +this.route.snapshot.paramMap.get('id');

    this.movieService.getFilmById(movieId).subscribe((filmList: any) => {
      console.log(filmList);
      this.movieDetails = filmList;
    });



  }
  ionViewDidEnter() {
    this.defaultHref = `/app/tabs/movie`;
  }
}
