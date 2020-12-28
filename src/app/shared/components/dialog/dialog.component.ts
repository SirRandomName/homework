import {animate, style, transition, trigger} from '@angular/animations';
import {Component, EventEmitter, Input, Output} from '@angular/core';
import {DIALOG_ANIMATION_TIME} from './dialog.model';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
  animations: [
    trigger('dialogAnimation', [
      transition(':enter', [
        style({
          opacity: 0,
          top: '30%'
        }),
        animate(`${DIALOG_ANIMATION_TIME}ms`, style({opacity: 1, top: '50%'}))
      ]),
      transition(':leave', [animate(`${DIALOG_ANIMATION_TIME}ms`, style({opacity: 0, top: 0}))])
    ])
  ]
})
export class DialogComponent {
  @Input() isOpen: boolean = false;
  @Output() closeDialog: EventEmitter<void> = new EventEmitter<void>();
  constructor() {}

  stopClick(event: MouseEvent) {
    event.stopPropagation();
  }

  onCloseDialog() {
    this.closeDialog.emit();
  }
}
