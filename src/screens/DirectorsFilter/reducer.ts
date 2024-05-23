import {DirectorsFilterActions, DirectorsFilterActionTypes} from './interface';

interface DirectorsFilterState {
  activeFilters: string[];
}

const initialFilterState: DirectorsFilterState = {
  activeFilters: [],
};

const DirectorsFilterReducer = (
  state = initialFilterState,
  action: DirectorsFilterActionTypes,
): DirectorsFilterState => {
  switch (action.type) {
    case DirectorsFilterActions.ADD_FILTER:
      return {
        ...state,
        activeFilters: [...state.activeFilters, action.payload],
      };

    case DirectorsFilterActions.REMOVE_FILTER:
      return {
        ...state,
        activeFilters: state.activeFilters.filter(
          filter => filter !== action.payload,
        ),
      };

    case DirectorsFilterActions.RESET_FILTERS:
      return {
        ...state,
        activeFilters: [],
      };

    default:
      return state;
  }
};

export default DirectorsFilterReducer;
