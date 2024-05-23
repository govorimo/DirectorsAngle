import {action, makeAutoObservable} from 'mobx';

import {Director} from '../types/models/director';
import {calculateDecadesActive} from '../utils';

class DirectorsStore {
  directors: Director[] = [];
  filteredDirectors: Director[] = [];
  searchActive: boolean = false;
  numOfFilterActive: number = 0;

  constructor() {
    makeAutoObservable(this, {
      updateDirectors: action,
      updateNumOfFiltersActive: action,
      setSearchActive: action,
      setFilteredDirectors: action,
    });
  }

  get directorsData() {
    if (this.numOfFilterActive > 0 || this.searchActive) {
      return this.filteredDirectors;
    } else {
      return this.directors;
    }
  }

  updateDirectors(directors: Director[]) {
    this.directors = directors.map(director => ({
      ...director,
      decadesActive: calculateDecadesActive(director.yearsActive),
    }));
  }

  updateNumOfFiltersActive(value: number) {
    this.numOfFilterActive = this.numOfFilterActive + value;
  }

  resetNumOfFiltersActive() {
    this.numOfFilterActive = 0;
  }

  setSearchActive(isSearchActive: boolean) {
    this.searchActive = isSearchActive;
  }

  setFilteredDirectors(filteredDirectors: Director[]) {
    this.filteredDirectors = filteredDirectors;
  }
}

const directorsStore = new DirectorsStore();

export default directorsStore;
