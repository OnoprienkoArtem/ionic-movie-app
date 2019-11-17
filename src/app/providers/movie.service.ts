import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LOCAL_CONFIG } from '../config/config-api';
import { ApiConfig } from '../models/api';
import { Subject } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class MovieService {
    movieDetails = new Subject<any>();
    movieFavorites = new Subject<any>();

    constructor(
        public http: HttpClient,
        @Inject(LOCAL_CONFIG) public localConfig: ApiConfig
    ) {}

    getPopularFilms(page?: number) {
        return this.http.get(
            `${this.localConfig.movieUrl}/popular${this.localConfig.params}&page=${page}`
        );
    }

    // getPopularFilms(page?: number) {
    //   this.http.get(`${this.localConfig.movieUrl}/popular${this.localConfig.params}&page=${page}`).subscribe(data => {
    //     this.movieDetails.next(data);
    //   });
    // }

    getPopularActors(page?: number) {
        return this.http.get(
            `${this.localConfig.personUrl}/popular${this.localConfig.params}&page=${page}`
        );
    }

    getListOfFavoritesFilms(user_id, session_id, page?) {
        // tslint:disable-next-line: max-line-length
        return this.http.get(
            // tslint:disable-next-line: max-line-length
            `${this.localConfig.accountUrl}/${user_id}/favorite/movies?api_key=${this.localConfig.apiKey}&session_id=${session_id}&language=ru-RU&page=${page}`
        );
    }

    // getListOfFavoritesFilms(user_id, session_id, page?) {
    // tslint:disable-next-line: max-line-length
    //   this.http.get(`${this.localConfig.accountUrl}/${user_id}/favorite/movies?api_key=${this.localConfig.apiKey}&session_id=${session_id}&language=ru-RU&page=${page}`).subscribe(data => {
    //     this.movieFavorites.next(data);
    //   });
    // }

    getFilmById(id?: number) {
        return this.http.get(
            `${this.localConfig.movieUrl}/${id}${this.localConfig.params}`
        );
    }
}
