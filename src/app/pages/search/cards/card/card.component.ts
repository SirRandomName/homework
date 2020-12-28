import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IMovie} from 'src/app/pages/search/search.model';
import {onlyYearFormat} from 'src/app/utils/date-format.util';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() card: any | undefined = undefined;
  @Output() onCardClick: EventEmitter<any> = new EventEmitter<any>();
  onlyYearFormat = onlyYearFormat;
  constructor() {}

  ngOnInit(): void {}

  cardClick(card: any): void {
    this.onCardClick.emit(card);
  }
}
