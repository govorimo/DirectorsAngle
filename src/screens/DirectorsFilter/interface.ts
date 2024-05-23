export enum DirectorsFilterActions {
  ADD_FILTER = 'ADD_FILTER',
  REMOVE_FILTER = 'REMOVE_FILTER',
  RESET_FILTERS = 'RESET_FILTERS',
}

export interface AddFilterAction {
  type: DirectorsFilterActions.ADD_FILTER;
  payload: string;
}

export interface RemoveFilterAction {
  type: DirectorsFilterActions.REMOVE_FILTER;
  payload: string;
}

export interface ResetFiltersAction {
  type: DirectorsFilterActions.RESET_FILTERS;
}

export type DirectorsFilterActionTypes =
  | AddFilterAction
  | RemoveFilterAction
  | ResetFiltersAction;
