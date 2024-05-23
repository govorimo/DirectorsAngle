import {Director} from './models/director';

export type SetDirectorsPayload = Director[];
export type SetFilteredDirectorsPayload = Director[];
export type SetFiltersActivePayload = number;
export type SetSearchActivePayload = boolean;

export interface DirectorsContextType {
  directors: Director[];
  setDirectors: (payload: SetDirectorsPayload) => void;
  filteredDirectors: Director[];
  setFilteredDirectors: (payload: SetFilteredDirectorsPayload) => void;
  numOfFiltersActive: number;
  setNumOfFiltersActive: (payload: SetFiltersActivePayload) => void;
  searchActive: boolean;
  setSearchActive: (payload: SetSearchActivePayload) => void;
  resetNumOfFiltersActive: () => void;
}

export interface DirectorsFilterContextType {
  activeFilters: string[];
  addItemToActiveFilter: (payload: string) => void;
  removeItemFromActiveFilter: (payload: string) => void;
  resetDirectorsFilter: () => void;
}
