import {animate, style, transition, trigger} from '@angular/animations';
import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DIALOG_ANIMATION_TIME} from '../dialog/dialog.model';
import {ISnackBarOptions, SnackBarTypes} from './snack-bar.model';

@Component({
  selector: 'app-snack-bar',
  templateUrl: './snack-bar.component.html',
  styleUrls: ['./snack-bar.component.scss'],
  animations: [
    trigger('snackBarAnimation', [
      transition(':enter', [
        style({
          opacity: 0,
          bottom: '-20px'
        }),
        animate(`${DIALOG_ANIMATION_TIME}ms`, style({opacity: 1, bottom: '15px'}))
      ]),
      transition(':leave', [animate(`${DIALOG_ANIMATION_TIME}ms`, style({opacity: 0, top: 0}))])
    ])
  ]
})
export class SnackBarComponent implements OnInit {
  @Input() type: SnackBarTypes = SnackBarTypes.COMMON;
  @Input() text: string = '';
  @Input() duration: number = 4000;
  @Output() close: EventEmitter<void> = new EventEmitter<void>();
  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      this.onClose();
    }, this.duration);
  }

  init(options: ISnackBarOptions) {
    this.text = options.text;
    this.type = options.type ?? this.type;
    this.duration = options.duration ?? this.duration;
  }

  onClose() {
    this.close.emit();
  }
}
