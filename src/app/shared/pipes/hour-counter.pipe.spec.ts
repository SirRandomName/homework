import {HourCounterPipe} from './hour-counter.pipe';

describe('HourCounterPipe', () => {
  it('create an instance', () => {
    const pipe = new HourCounterPipe();
    expect(pipe).toBeTruthy();
  });
});
