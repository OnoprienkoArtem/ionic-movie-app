import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LOCAL_CONFIG } from '../config/config-api';
import { ApiConfig } from '../models/api';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(public http: HttpClient, @Inject(LOCAL_CONFIG) public localConfig: ApiConfig) { }


  getPopularFilms(page?: number) {
    return this.http.get(`${this.localConfig.movieUrl}/popular${this.localConfig.params}&page=${page}`);
  }

  getListOfFavotitesFilms(user_id, session_id, page?) {
    return this.http.get(`${this.localConfig.accountUrl}/${user_id}/favorite/movies?
    api_key=${this.localConfig.apiKey}&session_id=${session_id}&language=ru-RU&page=${page}`);
  }
}
