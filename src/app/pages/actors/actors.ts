import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ActorService } from '../../providers/actor.service';
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
  public actorsObject: any;
  public firstPart: any;
  public secondPart: any;
  public spinner = false;

  constructor(
    @Inject(LOCAL_CONFIG) public localConfig: ApiConfig,
    public router: Router,
    public actorService: ActorService
  ) { }

  ngOnInit() {
    this.actorsSubscription = this.actorService.getPopularActors()
      .subscribe(data => {
        this.actorsObject = data;
        console.log(this.actorsObject);
        this.firstPart = this.actorsObject.results.slice(0, 2);
        this.secondPart = this.actorsObject.results.slice(2);
        this.spinner = false;
      });
    this.spinner = true;
  }

  ngOnDestroy() {
    this.actorsSubscription.unsubscribe();
  }


}
