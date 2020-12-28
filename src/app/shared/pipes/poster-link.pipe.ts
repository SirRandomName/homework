import {Pipe, PipeTransform} from '@angular/core';
import {environment} from 'src/environments/environment';

@Pipe({
  name: 'posterLink'
})
export class PosterLinkPipe implements PipeTransform {
  transform(posterUrl: string): string {
    if (posterUrl === null || posterUrl === undefined) {
      return 'assets/no-image.gif';
    } else {
      return environment.moviePosterHostUrl + posterUrl;
    }
  }
}
