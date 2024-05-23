import {atom} from 'jotai';

import {Director} from '../types/models/director';
import {calculateDecadesActive} from '../utils';

export const directorsAtom = atom([], (get, set, directors: Director[]) => {
  const updatedDirectors = directors.map(director => ({
    ...director,
    decadesActive: calculateDecadesActive(director.yearsActive),
  }));
  set(directorsAtom, updatedDirectors);
});

export const filteredDirectorsAtom = atom(
  [],
  (get, set, filteredDirectors: Director[]) => {
    set(filteredDirectorsAtom, filteredDirectors);
  },
);

export const searchActiveAtom = atom(false, (get, set, active: boolean) => {
  set(searchActiveAtom, active);
});

export const numOfFiltersActiveAtom = atom(0);

export const updateNumOfFiltersActiveAtom = atom(
  null,
  (get, set, count: number) => {
    const currentValue = get(numOfFiltersActiveAtom);
    set(numOfFiltersActiveAtom, currentValue + count);
  },
);

export const resetNumOfFiltersActiveAtom = atom(null, (get, set) => {
  set(numOfFiltersActiveAtom, 0);
});
