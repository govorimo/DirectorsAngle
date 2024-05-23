import {atom, DefaultValue, selector} from 'recoil';

type FilterRecoilState = string[] | string | DefaultValue;

export const activeFiltersState = atom<string[]>({
  key: 'activeFiltersState',
  default: [],
});

export const addItemToActiveFilterState = selector({
  key: 'addItemToActiveFilterState',
  get: ({get}) => get(activeFiltersState),
  set: ({get, set}, filter: FilterRecoilState) => {
    const currentFilters = get(activeFiltersState);
    set(activeFiltersState, [...currentFilters, filter as string]);
  },
});

export const removeItemFromActiveFilterState = selector({
  key: 'removeItemFromActiveFilterState',
  get: ({get}) => get(activeFiltersState),
  set: ({get, set}, filter: FilterRecoilState) => {
    const currentFilters = get(activeFiltersState);
    set(
      activeFiltersState,
      currentFilters.filter(item => item !== filter),
    );
  },
});

export const resetDirectorsFilterState = selector({
  key: 'resetDirectorsFilterState',
  get: ({get}) => get(activeFiltersState),
  set: ({set}) => {
    set(activeFiltersState, []);
  },
});
