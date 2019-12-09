import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { MovieService } from '../../providers/movie.service';
@Component({
  selector: 'actors',
  templateUrl: 'actors.html',
  styleUrls: ['./actors.scss'],
})
export class ActorsPage implements OnInit, OnDestroy {



  private actorsSubscription: Subscription;

  constructor(
    public router: Router,
    public movieService: MovieService
  ) { }

  ngOnInit() {
    this.actorsSubscription = this.movieService.getPopularActors()
      .subscribe(data => {
        console.log('actors =====>>>', data);

      });

  }

  ngOnDestroy() {
    this.actorsSubscription.unsubscribe();
  }




}
