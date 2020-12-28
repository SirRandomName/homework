import {HttpErrorResponse} from '@angular/common/http';

export interface ISearchMovieResponse {
  page: number;
  results: IMovie[];
  total_results: number;
  total_pages: number;
}

export interface IMovie {
  poster_path: string;
  adult: boolean;
  overview: string;
  release_date: string;
  genre_ids: number[];
  id: number;
  original_title?: string;
  original_name?: string;
  name?: string;
  original_language: string;
  title: string;
  backdrop_path: string;
  popularity: number;
  vote_count: number;
  video: boolean;
  vote_average: number;
}

export interface IProductionCountries {
  iso_3166_1: string;
  name: string;
}

export interface IGenre {
  id: number;
  name: string;
}

export interface IMovieDetails {
  original_title: string;
  tagline: string;
  overview: string;
  release_date: string;
  production_countries: IProductionCountries[];
  spoken_languages: ILanguages[];
  genres: IGenre[];
  runtime: number;
  imdb_id: string;
  backdrop_path: string;
  [key: string]: any;
}

export interface IGenreList {
  genres: IGenre[];
}

export interface IGenre {
  id: number;
  name: string;
}

export interface ILanguages {
  english_name: string;
  iso_639_1: string;
  name: string;
}

export interface IMovieDetailsError extends HttpErrorResponse {
  error: {
    status_code: number;
    status_message: string;
    success: boolean; // always false?
  };
}
