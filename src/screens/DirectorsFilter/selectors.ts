import {RootState} from '../../store/store';

export const selectActiveFilters = (state: RootState): string[] =>
  state.directorsFilter.activeFilters;
