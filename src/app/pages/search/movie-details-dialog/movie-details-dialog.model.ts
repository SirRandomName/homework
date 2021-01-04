import {IMovieDetails} from '../search.model';

export interface IMovieDetailsDialogData {
  details: IMovieDetails | null;
  imdbTitleUrl: string;
}
