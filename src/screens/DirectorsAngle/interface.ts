import {Director} from '../../types/models/director';

export enum DirectorActions {
  SET_DIRECTORS = 'SET_DIRECTORS',
  UPDATE_NUM_OF_FILTERS_ACTIVE = 'UPDATE_NUM_OF_FILTERS_ACTIVE',
  RESET_NUM_OF_FILTERS_ACTIVE = 'RESET_NUM_OF_FILTERS_ACTIVE',
  SET_SEARCH_ACTIVE = 'SET_SEARCH_ACTIVE',
  SET_FILTERED_DIRECTORS = 'SET_FILTERED_DIRECTORS',
}

export interface SetDirectorsAction {
  type: DirectorActions.SET_DIRECTORS;
  payload: Director[];
}

export interface UpdateNumOfFiltersActiveAction {
  type: DirectorActions.UPDATE_NUM_OF_FILTERS_ACTIVE;
  payload: number;
}

export interface ResetNumOfFiltersActiveAction {
  type: DirectorActions.RESET_NUM_OF_FILTERS_ACTIVE;
}

export interface SetSearchActiveAction {
  type: DirectorActions.SET_SEARCH_ACTIVE;
  payload: boolean;
}

export interface SetFilteredDirectorsAction {
  type: DirectorActions.SET_FILTERED_DIRECTORS;
  payload: Director[];
}

export type DirectorActionsType =
  | SetDirectorsAction
  | UpdateNumOfFiltersActiveAction
  | ResetNumOfFiltersActiveAction
  | SetSearchActiveAction
  | SetFilteredDirectorsAction;
