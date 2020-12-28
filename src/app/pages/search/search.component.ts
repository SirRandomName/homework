import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Subject} from 'rxjs';
import {ROUTING_TREE} from 'src/app/app-routing.model';
import {IMovie, IMovieDetails, ISearchMovieResponse} from './search.model';
import {SearchService} from './search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  inputValue: string = '';
  lastSearch!: string;
  actualDetails: IMovieDetails | null = null;
  movieSearchResults$: Subject<IMovie[]> = new Subject<IMovie[]>();
  actualPage: number = 1;
  totalPages: number | undefined;
  results: IMovie[] = [];
  totalResults: number = 0;
  constructor(private _searchService: SearchService) {}

  ngOnInit(): void {}

  resetSearchState() {
    this.actualPage = 1;
    this.totalPages = undefined;
    this.results = [];
    this.totalResults = 0;
    this.movieSearchResults$.next(this.results);
  }

  search(text: string, page: number = 1): void {
    // need to reset the previous results
    if (this.lastSearch !== text) {
      this.resetSearchState();
    }
    // do not send request if we reached the last page
    if (this.totalPages === undefined || page <= this.totalPages) {
      this._searchService.search(text, page).subscribe((data: ISearchMovieResponse) => {
        this.totalPages = data.total_pages;
        this.totalResults = data.total_results;
        this.results.push(...data.results);
        this.movieSearchResults$.next(this.results);
      });
      this.lastSearch = text;
    }
  }
}
