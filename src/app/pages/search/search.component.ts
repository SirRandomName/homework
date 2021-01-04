import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Subject} from 'rxjs';
import {ROUTING_TREE} from 'src/app/app-routing.model';
import {DIALOG_ANIMATION_TIME} from 'src/app/shared/components/dialog/dialog.model';
import {MovieDetailsDialogComponent} from './movie-details-dialog/movie-details-dialog.component';
import {IMovieDetailsDialogData} from './movie-details-dialog/movie-details-dialog.model';
import {IMovie, IMovieDetails, ISearchMovieResponse} from './search.model';
import {SearchService} from './search.service';
import {DialogService} from 'src/app/core/dialog/dialog.service';
import {take} from 'rxjs/operators';

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
  // query params
  searchParam!: string | null;
  detailsParam!: string | null;
  // dialog
  dialogData!: IMovieDetailsDialogData;
  constructor(
    private _searchService: SearchService,
    private _router: Router,
    private _route: ActivatedRoute,
    private _dialogService: DialogService
  ) {
    this.setDetailsDialogObject();
    this.setPageState();
  }

  ngOnInit(): void {}

  setDetailsDialogObject(): void {
    const detailsDialogDataObject: IMovieDetailsDialogData = {
      details: null,
      imdbTitleUrl: this._searchService.imdbTitleUrl
    };
    this.dialogData = detailsDialogDataObject;
  }

  setPageState(): void {
    this.searchParam = this._route.snapshot.queryParams['search'];
    this.detailsParam = this._route.snapshot.queryParams['details'];
    if (typeof this.searchParam === 'string') {
      this.onSearch(this.searchParam);
      this.inputValue = this.searchParam;
    }
    if (typeof this.detailsParam === 'string') {
      this.openDialog(Number(this.detailsParam));
    }
  }

  resetSearchState(): void {
    this.actualPage = 1;
    this.totalPages = undefined;
    this.results = [];
    this.totalResults = 0;
    this.movieSearchResults$.next(this.results);
  }

  onSearchBarClear(): void {
    this._router.navigate([ROUTING_TREE.search.path], {queryParams: {}});
  }

  onSearch(text: string, page: number = 1): void {
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

  onScroll(): void {
    this.actualPage++;
    this.onSearch(this.lastSearch, this.actualPage);
  }

  onClose(): void {
    // do not destroy the content until the animation is done
    setTimeout(() => {
      this._router.navigate([ROUTING_TREE.search.path], {queryParams: {search: this.lastSearch}});
    }, DIALOG_ANIMATION_TIME);
  }

  openDetailsDialog(movie: IMovie): void {
    this.openDialog(movie.id);
  }

  openDialog(id: number): void {
    this._searchService.getDetails(id).subscribe((data: IMovieDetails) => {
      this.dialogData.details = data;
      const dialogRef = this._dialogService.open(MovieDetailsDialogComponent, this.dialogData);
      dialogRef.instance.close.pipe(take(1)).subscribe(() => this.onClose());
      this._router.navigate([ROUTING_TREE.search.path], {queryParams: {search: this.lastSearch, details: id}});
    });
  }
}
