export enum SnackBarTypes {
  ERROR = 'error',
  SUCCESS = 'success',
  COMMON = 'common'
}

export interface ISnackBarOptions {
  text: string;
  type?: SnackBarTypes;
  duration?: number; //ms
}
