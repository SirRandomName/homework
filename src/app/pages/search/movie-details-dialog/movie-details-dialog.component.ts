import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IMovieDetailsDialogData} from './movie-details-dialog.model';

@Component({
  selector: 'app-movie-details-dialog',
  templateUrl: './movie-details-dialog.component.html',
  styleUrls: ['./movie-details-dialog.component.scss']
})
export class MovieDetailsDialogComponent implements OnInit {
  @Output() close: EventEmitter<void> = new EventEmitter<void>();
  @Input() data!: IMovieDetailsDialogData;
  constructor() {}

  ngOnInit(): void {}

  init(data: IMovieDetailsDialogData) {
    this.data = data;
  }

  onClose(): void {
    this.close.emit();
  }
}
