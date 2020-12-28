import {Component, ElementRef, EventEmitter, Input, OnDestroy, Output, ViewChild} from '@angular/core';
import {Subject, Subscription} from 'rxjs';
import {filter, debounceTime} from 'rxjs/operators';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnDestroy {
  @ViewChild('searchInput') private searchInput!: ElementRef;
  @Input() debounceTimer: number = 500; // ms
  @Input() minSearchLength: number = 3;
  @Input() value: string = '';
  @Input() placeholder: string = '';
  @Output() search: EventEmitter<string> = new EventEmitter<string>();

  private keyPress$ = new Subject<string>();
  private keyPressSub!: Subscription;

  constructor() {
    this.keyPressSub = this.keyPress$
      .pipe(debounceTime(this.debounceTimer))
      .pipe(filter((text: string) => text.length >= this.minSearchLength))
      .subscribe((text: string) => {
        this.search.emit(text.trimStart());
      });
  }

  inputChanged(event: any): void {
    this.keyPress$.next(event?.target?.value);
  }

  resetInput(): void {
    this.searchInput.nativeElement.value = '';
    this.keyPress$.next('');
    this.searchInput.nativeElement.focus();
  }

  ngOnDestroy(): void {
    this.keyPressSub.unsubscribe();
  }
}
