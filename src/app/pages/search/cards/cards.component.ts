import {AfterContentInit, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {trigger, style, transition, animate, keyframes, query, stagger} from '@angular/animations';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
  animations: [
    trigger('cardAnimation', [
      transition('* => *', [
        query(':enter', style({opacity: 0}), {optional: true}),
        query(
          ':enter',
          stagger('50ms', [
            animate(
              '.5s ease-in',
              keyframes([
                style({opacity: 0, transform: 'translateY(-50%)', offset: 0}),
                style({opacity: 0.5, transform: 'translateY(-10px) scale(1.1)', offset: 0.3}),
                style({opacity: 1, transform: 'translateY(0)', offset: 1})
              ])
            )
          ]),
          {optional: true}
        ),
        query(
          ':leave',
          stagger('300ms', [
            animate(
              '500ms ease-out',
              keyframes([
                style({opacity: 1, transform: 'scale(1.1)', offset: 0}),
                style({opacity: 0.5, transform: 'scale(.5)', offset: 0.3}),
                style({opacity: 0, transform: 'scale(0)', offset: 1})
              ])
            )
          ]),
          {optional: true}
        )
      ])
    ])
  ]
})
export class CardsComponent implements OnInit, AfterContentInit {
  @Input() cards: any[] = [];
  @Input() scrollDistance: number = 0.1;
  @Input() throttle: number = 200; // ms
  @Output() onClick: EventEmitter<any> = new EventEmitter<any>();
  @Output() scrolled: EventEmitter<void> = new EventEmitter<void>();
  constructor() {}

  ngOnInit(): void {}

  ngAfterContentInit(): void {}

  cardClick(card: any): void {
    this.onClick.emit(card);
  }

  onScrollEnd(): void {
    this.scrolled.emit();
  }
}
