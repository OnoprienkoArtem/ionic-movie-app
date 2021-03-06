import { Component, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActorService } from '../../providers/actor.service';
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
    public actorService: ActorService,
    @Inject(LOCAL_CONFIG) public localConfig: ApiConfig
  ) { }

  ionViewWillEnter() {
    const actorId = +this.route.snapshot.paramMap.get('id');

    this.actorService.getActorById(actorId).subscribe((actorList: any) => {
      this.actorDetails = actorList;
      console.log(this.actorDetails);
    });
  }

  ionViewDidEnter() {
    this.defaultHref = `/app/tabs/actors`;
  }
}
