import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from 'src/environments/environment';
import {Observable} from 'rxjs';

@Injectable()
export class SearchService {
  constructor(private _http: HttpClient) {}

  search(value: string, page: number = 0): Observable<any> {
    let params = new HttpParams()
      .set('api_key', environment.movieApiKey)
      .set('query', value)
      .set('page', String(page))
      .set('include_adult', String(false));
    const url = `${environment.movieHostUrl}search/multi`;
    return this._http.get(url, {params});
  }

  getPosterLink(posterUrl: string): string {
    if (posterUrl === null || posterUrl === undefined) {
      return environment.moviePosterHostUrl + posterUrl;
    } else {
      return 'assets/no-image.gif';
    }
  }

  getGenreList(): Observable<any> {
    let params = new HttpParams().set('api_key', environment.movieApiKey);
    const url = `${environment.movieHostUrl}genre/movie/list`;
    return this._http.get(url, {params});
  }

  getDetails(id: number): Observable<any> {
    let params = new HttpParams().set('api_key', environment.movieApiKey);
    const url = `${environment.movieHostUrl}movie/${id}`;
    return this._http.get(url, {params});
  }
}
