import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from 'src/environments/environment';
import {EMPTY, Observable} from 'rxjs';
import {IGenre, IGenreList, IMovieDetailsError} from './search.model';
import {catchError, take} from 'rxjs/operators';

@Injectable()
export class SearchService {
  imdbTitleUrl = `${environment.imdbHostUrl}title/`;
  genreList: IGenre[] = [];
  constructor(private _http: HttpClient) {
    this.getGenreList()
      .pipe(take(1))
      .subscribe((data: IGenreList) => {
        this.genreList = data.genres;
      });
  }

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
    return this._http.get(url, {params}).pipe(catchError(this.handleDetailsError));
  }

  handleDetailsError(error: IMovieDetailsError) {
    alert(`An error occurred: ${error.error.status_message}`);
    return EMPTY;
  }
}
