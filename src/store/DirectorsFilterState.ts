import {makeAutoObservable} from 'mobx';

class DirectorsFilterStore {
  activeFilters: string[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  addItemToActive(filter: string) {
    if (!this.activeFilters.includes(filter)) {
      this.activeFilters = [...this.activeFilters, filter];
    }
  }

  removeItemFromActive(filter: string) {
    this.activeFilters = this.activeFilters.filter(item => item !== filter);
  }

  resetDirectorsFilter() {
    this.activeFilters = [];
  }
}

const directorsFilterStore = new DirectorsFilterStore();

export default directorsFilterStore;
