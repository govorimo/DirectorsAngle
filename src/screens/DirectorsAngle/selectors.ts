import {RootState} from '../../store/store';
import {Director} from '../../types/models/director';

import {DirectorState} from './reducer';

export const selectDirectors = (state: RootState): Director[] =>
  state.directors.directors;

export const selectFilteredDirectors = (state: RootState): Director[] =>
  state.directors.filteredDirectors;

export const selectSearchActive = (state: RootState): boolean =>
  state.directors.searchActive;

export const selectNumOfFiltersActive = (state: RootState): number =>
  state.directors.numOfFiltersActive;

export const selectDirectorsState = (state: RootState): DirectorState =>
  state.directors;
