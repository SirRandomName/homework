import {Pipe, PipeTransform} from '@angular/core';
import {IGenre} from 'src/app/pages/search/search.model';
import {SearchService} from 'src/app/pages/search/search.service';

@Pipe({
  name: 'genre'
})
export class GenrePipe implements PipeTransform {
  constructor(private _searchService: SearchService) {}
  transform(value: number): string {
    const genre = this._searchService.genreList.find((genre: IGenre): IGenre | void => {
      if (genre.id === value) {
        return genre;
      }
    });
    if (genre) {
      return genre.name;
    } else {
      return '';
    }
  }
}

// output format: "genre1 / genre2 / genre3"
@Pipe({
  name: 'genres'
})
export class GenresPipe implements PipeTransform {
  constructor(private _searchService: SearchService) {}
  transform(value: number[]): string {
    if (value === undefined) {
      return '-';
    }
    let text = '';
    value.forEach((genreId: number, index: number) => {
      this._searchService.genreList.find((genre: IGenre): void => {
        if (genre.id === genreId) {
          text += genre.name;
          if (index < value.length - 1) {
            text += ', ';
          }
        }
      });
    });
    return text;
  }
}

@Pipe({
  name: 'genreObjects'
})
export class GenreObjectsPipe implements PipeTransform {
  constructor() {}
  transform(value: IGenre[]): string {
    if (value === undefined) {
      return '-';
    }
    let text = '';
    value.forEach((genre: IGenre, index: number) => {
      text += genre.name;
      if (index < value.length - 1) {
        text += ', ';
      }
    });
    return text;
  }
}
