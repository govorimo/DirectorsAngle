import {atom, DefaultValue, selector} from 'recoil';

import {Director} from '../types/models/director';
import {calculateDecadesActive} from '../utils';

export const directorsState = atom<Director[]>({
  key: 'directorsState',
  default: [],
});

export const filteredDirectorsState = atom<Director[]>({
  key: 'filteredDirectorsState',
  default: [],
});

export const searchActiveState = atom<boolean>({
  key: 'searchActiveState',
  default: false,
});

export const numOfFiltersActiveState = atom<number>({
  key: 'numOfFiltersActiveState',
  default: 0,
});

export const updateDirectorsState = selector<Director[]>({
  key: 'updateDirectorsState',
  get: ({get}) => get(directorsState),
  set: ({set}, directors: Director[] | DefaultValue) => {
    const updatedDirectors = (directors as Director[]).map(director => ({
      ...director,
      decadesActive: calculateDecadesActive(director.yearsActive),
    }));
    set(directorsState, updatedDirectors);
  },
});

export const updateNumOfFiltersActiveState = selector<number>({
  key: 'updateNumOfFiltersActiveState',
  get: ({get}) => get(numOfFiltersActiveState),
  set: ({get, set}, count: number | DefaultValue) => {
    const currentValue = get(numOfFiltersActiveState);
    set(numOfFiltersActiveState, currentValue + (count as number));
  },
});

export const resetNumOfFiltersActiveState = selector({
  key: 'resetNumOfFiltersActiveState',
  get: ({get}) => get(numOfFiltersActiveState),
  set: ({set}) => {
    set(numOfFiltersActiveState, 0);
  },
});
