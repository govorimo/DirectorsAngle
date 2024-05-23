import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {SliceNames} from '../../types/store';

export type SetDecadesActivePayload = string[];
export type SetCountriesBornPayload = string[];

export interface DirectorsFilterState {
  activeFilters: string[];
}

const initialState: DirectorsFilterState = {
  activeFilters: [],
};

const directorsFilterSlice = createSlice({
  name: SliceNames.DIRECTORS_FILTER,
  initialState: initialState,
  reducers: {
    addItemToActiveFilter(state, action: PayloadAction<string>) {
      state.activeFilters.push(action.payload);
    },
    removeItemFromActiveFilter(state, action: PayloadAction<string>) {
      state.activeFilters = state.activeFilters.filter(
        item => item !== action.payload,
      );
    },
    resetDirectorsFilter: () => {
      return initialState;
    },
  },
});

export const {
  addItemToActiveFilter,
  removeItemFromActiveFilter,
  resetDirectorsFilter,
} = directorsFilterSlice.actions;

export default directorsFilterSlice.reducer;
