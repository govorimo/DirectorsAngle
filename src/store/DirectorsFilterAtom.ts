import {atom} from 'jotai';

export const activeFiltersAtom = atom<string[]>([]);

export const addItemToActiveFilterAtom = atom(
  null,
  (get, set, filter: string) => {
    const currentFilters = get(activeFiltersAtom);
    set(activeFiltersAtom, [...currentFilters, filter]);
  },
);

export const removeItemFromActiveFilterAtom = atom(
  null,
  (get, set, filter: string) => {
    const currentFilters = get(activeFiltersAtom);
    set(
      activeFiltersAtom,
      currentFilters.filter(item => item !== filter),
    );
  },
);

export const resetDirectorsFilterAtom = atom(null, (get, set) => {
  set(activeFiltersAtom, []);
});
