import {Pipe, PipeTransform} from '@angular/core';
import {IGenre} from 'src/app/pages/search/search.model';
import {SearchService} from 'src/app/pages/search/search.service';

@Pipe({
  name: 'genreList'
})
export class GenreListPipe implements PipeTransform {
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
