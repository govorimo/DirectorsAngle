import {clone, types} from 'mobx-state-tree';

import {Director as DirectorType} from '../types/models/director';
import {calculateDecadesActive} from '../utils';

import directorsFilterStore from './DirectorsFilterStore';
import {Director, IDirector} from './models/Director';

const DirectorsStore = types
  .model('DirectorsState', {
    directors: types.array(Director),
    filteredDirectors: types.array(Director),
    searchActive: types.boolean,
    numOfFiltersActive: types.number,
  })
  .views(self => ({
    get activeFilters() {
      return directorsFilterStore.activeFilters;
    },
    get filteredDirectorsComputed() {
      return self.directors.filter(director => {
        const matchesDecade = directorsFilterStore.activeFilters.some(item =>
          director.decadesActive.includes(item),
        );

        const matchesCountry = directorsFilterStore.activeFilters.some(
          item => director.country === item,
        );

        return matchesDecade || matchesCountry;
      });
    },
  }))
  .actions(self => ({
    updateDirectors(directors: DirectorType[]) {
      self.directors.replace(
        directors.map((director: DirectorType) => {
          return Director.create({
            ...director,
            decadesActive: calculateDecadesActive(director.yearsActive),
          });
        }),
      );
    },

    updateNumOfFiltersActive(value: number) {
      self.numOfFiltersActive = self.numOfFiltersActive + value;
    },

    resetNumOfFiltersActive() {
      self.numOfFiltersActive = 0;
    },

    setSearchActive(isSearchActive: boolean) {
      self.searchActive = isSearchActive;
    },

    setFilteredDirectors(filteredDirectors: IDirector[]) {
      self.filteredDirectors.replace(
        filteredDirectors.map(director => clone(director)),
      );
    },
  }));

const directorsStore = DirectorsStore.create({
  directors: [],
  filteredDirectors: [],
  searchActive: false,
  numOfFiltersActive: 0,
});

export default directorsStore;
