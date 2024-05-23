import {DirectorsState} from '../screens/DirectorsAngle/slice';
import {DirectorsFilterState} from '../screens/FilterDirectors/slice';

export interface RootState {
  directors: DirectorsState;
  directorsFilter: DirectorsFilterState;
}

export enum SliceNames {
  DIRECTORS = 'directors',
  DIRECTORS_FILTER = 'directorsFilter',
}
