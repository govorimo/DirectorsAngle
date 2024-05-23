import {Director} from '../../types/models/director';
import {calculateDecadesActive} from '../../utils';

import {DirectorActions, DirectorActionsType} from './interface';

export interface DirectorState {
  directors: Director[];
  filteredDirectors: Director[];
  searchActive: boolean;
  numOfFiltersActive: number;
}

const initialDirectorState: DirectorState = {
  directors: [],
  filteredDirectors: [],
  searchActive: false,
  numOfFiltersActive: 0,
};

const DirectorReducer = (
  state = initialDirectorState,
  action: DirectorActionsType,
): DirectorState => {
  switch (action.type) {
    case DirectorActions.SET_DIRECTORS:
      return {
        ...state,
        directors: action.payload.map(director => ({
          ...director,
          decadesActive: calculateDecadesActive(director.yearsActive),
        })),
      };
    case DirectorActions.UPDATE_NUM_OF_FILTERS_ACTIVE:
      return {
        ...state,
        numOfFiltersActive: state.numOfFiltersActive + action.payload,
      };

    case DirectorActions.RESET_NUM_OF_FILTERS_ACTIVE:
      return {
        ...state,
        numOfFiltersActive: 0,
      };

    case DirectorActions.SET_SEARCH_ACTIVE:
      return {
        ...state,
        searchActive: action.payload,
      };

    case DirectorActions.SET_FILTERED_DIRECTORS:
      return {
        ...state,
        filteredDirectors: action.payload.map(director => ({...director})),
      };

    default:
      return state;
  }
};

export default DirectorReducer;
