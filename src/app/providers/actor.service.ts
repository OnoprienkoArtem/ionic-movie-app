import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LOCAL_CONFIG } from '../config/config-api';
import { ApiConfig } from '../models/api';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActorService {

  constructor(
    public http: HttpClient,
    @Inject(LOCAL_CONFIG) public localConfig: ApiConfig) { }


  getPopularActors(page?: number) {
    return this.http.get(`${this.localConfig.personUrl}/popular${this.localConfig.params}&page=${page}`);
  }

  getActorById(id?: number) {
    return this.http.get(`${this.localConfig.personUrl}/${id}${this.localConfig.params}`);
  }
}
