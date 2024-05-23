import {Director} from './models/director';

export interface DirectorsState {
  directors: Director[];
  filteredDirectors: Director[];
  numOfFiltersActive: number;
  searchActive: boolean;
  setDirectors: (directors: Director[]) => void;
  setFilteredDirectors: (directors: Director[]) => void;
  setNumOfFiltersActive: (count: number) => void;
  setSearchActive: (active: boolean) => void;
  resetNumOfFiltersActive: () => void;
}

export interface DirectorsFilterState {
  activeFilters: string[];
  addItemToActiveFilter: (filter: string) => void;
  removeItemFromActiveFilter: (filter: string) => void;
  resetDirectorsFilter: () => void;
}

export interface RootState {
  directors: DirectorsState;
  directorsFilter: DirectorsFilterState;
}
