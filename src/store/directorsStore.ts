import {create} from 'zustand';

import {DirectorsState} from '../types/store';
import {calculateDecadesActive} from '../utils';

export const useDirectorsStore = create<DirectorsState>(set => ({
  directors: [],
  filteredDirectors: [],
  numOfFiltersActive: 0,
  searchActive: false,
  setDirectors: directors =>
    set(() => ({
      directors: directors.map(director => ({
        ...director,
        decadesActive: calculateDecadesActive(director.yearsActive),
      })),
    })),
  setFilteredDirectors: filteredDirectors => set({filteredDirectors}),
  setNumOfFiltersActive: count =>
    set(state => ({
      numOfFiltersActive: state.numOfFiltersActive + count,
    })),
  setSearchActive: active => set({searchActive: active}),
  resetNumOfFiltersActive: () => set({numOfFiltersActive: 0}),
}));
