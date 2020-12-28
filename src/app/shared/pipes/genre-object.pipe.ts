import {Pipe, PipeTransform} from '@angular/core';
import {IGenre} from 'src/app/pages/search/search.model';

@Pipe({
  name: 'genreObject'
})
export class GenreObjectPipe implements PipeTransform {
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
