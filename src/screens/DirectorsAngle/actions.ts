import {Director} from '../../types/models/director';

import {
  DirectorActions,
  ResetNumOfFiltersActiveAction,
  SetFilteredDirectorsAction,
  SetSearchActiveAction,
  SetDirectorsAction,
  UpdateNumOfFiltersActiveAction,
} from './interface';

export const setDirectors = (directors: Director[]): SetDirectorsAction => ({
  type: DirectorActions.SET_DIRECTORS,
  payload: directors,
});

export const updateNumOfFiltersActive = (
  value: number,
): UpdateNumOfFiltersActiveAction => ({
  type: DirectorActions.UPDATE_NUM_OF_FILTERS_ACTIVE,
  payload: value,
});

export const resetNumOfFiltersActiveAction =
  (): ResetNumOfFiltersActiveAction => ({
    type: DirectorActions.RESET_NUM_OF_FILTERS_ACTIVE,
  });

export const setSearchActiveAction = (
  isSearchActive: boolean,
): SetSearchActiveAction => ({
  type: DirectorActions.SET_SEARCH_ACTIVE,
  payload: isSearchActive,
});

export const setFilteredDirectorsAction = (
  filteredDirectors: Director[],
): SetFilteredDirectorsAction => ({
  type: DirectorActions.SET_FILTERED_DIRECTORS,
  payload: filteredDirectors,
});
