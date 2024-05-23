import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {Director} from '../../types/models/director';
import {SliceNames} from '../../types/store';
import {calculateDecadesActive} from '../../utils';

type SetDirectorsPayload = Director[];
type SetFilteredDirectorsPayload = Director[];
type SetFiltersActivePayload = number;
type SetSearchActivePayload = boolean;

export interface DirectorsState {
  directors: Director[];
  filteredDirectors: Director[];
  numOfFiltersActive: number;
  searchActive: boolean;
}

const initialState: DirectorsState = {
  directors: [],
  filteredDirectors: [],
  numOfFiltersActive: 0,
  searchActive: false,
};

const directorsSlice = createSlice({
  name: SliceNames.DIRECTORS,
  initialState: initialState,
  reducers: {
    setDirectors: (
      state: DirectorsState,
      action: PayloadAction<SetDirectorsPayload>,
    ) => {
      state.directors = action.payload.map((director: Director) => ({
        ...director,
        decadesActive: calculateDecadesActive(director.yearsActive),
      }));
    },
    setFilteredDirectors: (
      state: DirectorsState,
      action: PayloadAction<SetFilteredDirectorsPayload>,
    ) => {
      state.filteredDirectors = action.payload;
    },
    setNumOfFiltersActive: (
      state: DirectorsState,
      action: PayloadAction<SetFiltersActivePayload>,
    ) => {
      state.numOfFiltersActive = state.numOfFiltersActive + action.payload;
    },
    setSearchActive: (
      state: DirectorsState,
      action: PayloadAction<SetSearchActivePayload>,
    ) => {
      state.searchActive = action.payload;
    },
    resetNumOfFiltersActive: (state: DirectorsState) => {
      state.numOfFiltersActive = initialState.numOfFiltersActive;
    },
  },
});

export const {
  setDirectors,
  setFilteredDirectors,
  setNumOfFiltersActive,
  setSearchActive,
  resetNumOfFiltersActive,
} = directorsSlice.actions;

export default directorsSlice.reducer;
