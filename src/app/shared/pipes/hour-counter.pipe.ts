import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'hourCounter'
})
export class HourCounterPipe implements PipeTransform {
  transform(value: number, ...args: unknown[]): string {
    return Math.ceil(value / 30) / 2 + ' hour(s)';
  }
}
