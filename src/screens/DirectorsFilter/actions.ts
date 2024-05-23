import {
  AddFilterAction,
  DirectorsFilterActions,
  RemoveFilterAction,
  ResetFiltersAction,
} from './interface';

export const addFilter = (filter: string): AddFilterAction => ({
  type: DirectorsFilterActions.ADD_FILTER,
  payload: filter,
});

export const removeFilter = (filter: string): RemoveFilterAction => ({
  type: DirectorsFilterActions.REMOVE_FILTER,
  payload: filter,
});

export const resetFilters = (): ResetFiltersAction => ({
  type: DirectorsFilterActions.RESET_FILTERS,
});
