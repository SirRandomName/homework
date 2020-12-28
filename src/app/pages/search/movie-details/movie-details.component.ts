import {Component, Input, OnInit} from '@angular/core';
import {onlyYearFormat} from 'src/app/utils/date-format.util';
import {IMovieDetails} from '../search.model';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
  @Input() details!: IMovieDetails | null;
  @Input() imdbTitleUrl!: string;
  onlyYearFormat = onlyYearFormat;
  constructor() {}

  ngOnInit(): void {}

  navigate(url: string): void {
    window.open(url, '_blank');
  }
}
