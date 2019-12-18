import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserData } from '../../providers/user-data';
import { MovieService } from '../../providers/movie.service';
import { LOCAL_CONFIG } from '../../config/config-api';
import { ApiConfig } from '../../models/api';

@Component({
  selector: 'movie-details',
  templateUrl: './movie-details.html',
  styleUrls: ['./movie-details.scss'],
})
export class MovieDetailsPage implements OnInit {

  session: any;
  isFavorite = false;
  defaultHref = '';
  public movieDetails: any;
  public imgUrl: string = this.localConfig.midImgPath;
  public logo_path: any[];

  constructor(
    private userProvider: UserData,
    private route: ActivatedRoute,
    public movieService: MovieService,
    @Inject(LOCAL_CONFIG) public localConfig: ApiConfig
  ) { }

  ngOnInit() { }

  ionViewWillEnter() {
    const movieId = +this.route.snapshot.paramMap.get('id');

    this.movieService.getFilmById(movieId).subscribe((filmList: any) => {
      // console.log(filmList);
      this.movieDetails = filmList;
      console.log(this.movieDetails);
      this.logo_path = this.movieDetails.production_companies.filter(item => item.logo_path !== null);
    });



  }

  ionViewDidEnter() {
    this.defaultHref = `/app/tabs/movie`;
  }
}
