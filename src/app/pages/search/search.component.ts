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
  // search functionality
  inputValue: string = '';
  lastSearch!: string;
  movieSearchResults$: Subject<IMovie[]> = new Subject<IMovie[]>();
  actualPage: number = 1;
  totalPages: number | undefined;
  results: IMovie[] = [];
  totalResults: number = 0;
  // dialog
  isDetailsDialogOpen = false;
  actualDetails: IMovieDetails | null = null;
  imdbTitleUrl!: string;
  // use query params
  searchParam!: string | null;
  detailsParam!: string | null;
  constructor(private _searchService: SearchService, private _router: Router, private _route: ActivatedRoute) {
    this.imdbTitleUrl = this._searchService.imdbTitleUrl;
    this.searchParam = this._route.snapshot.queryParams['search'];
    this.detailsParam = this._route.snapshot.queryParams['details'];
    if (typeof this.searchParam === 'string') {
      this.search(this.searchParam);
      this.inputValue = this.searchParam;
    }
    if (typeof this.detailsParam === 'string') {
      this.openDialog(Number(this.detailsParam));
    }
  }

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
      this._router.navigate([ROUTING_TREE.search.path], {queryParams: {search: text}});
    }
  }

  onClose(): void {
    this.isDetailsDialogOpen = false;
    this.actualDetails = null;
    this._router.navigate([ROUTING_TREE.search.path], {queryParams: {search: this.lastSearch}});
  }

  openDialog(id: number): void {
    this._searchService.getDetails(id).subscribe((data: IMovieDetails) => {
      this.isDetailsDialogOpen = true;
      this.actualDetails = data;
      this._router.navigate([ROUTING_TREE.search.path], {queryParams: {search: this.lastSearch, details: id}});
    });
  }
}
