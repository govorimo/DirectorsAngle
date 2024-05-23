import {create} from 'zustand';

import {DirectorsFilterState} from '../types/store';

export const useDirectorsFilterStore = create<DirectorsFilterState>(set => ({
  activeFilters: [],
  addItemToActiveFilter: filter =>
    set(state => ({
      activeFilters: [...state.activeFilters, filter],
    })),
  removeItemFromActiveFilter: filter =>
    set(state => ({
      activeFilters: state.activeFilters.filter(item => item !== filter),
    })),
  resetDirectorsFilter: () => set({activeFilters: []}),
}));
