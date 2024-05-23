import {types} from 'mobx-state-tree';

const DirectorsFilterStore = types
  .model('DirectorsFilterStore', {
    activeFilters: types.array(types.string),
  })
  .actions(self => ({
    addItemToActive(filter: string) {
      if (!self.activeFilters.includes(filter)) {
        self.activeFilters.push(filter);
      }
    },

    removeItemFromActive(filter: string) {
      self.activeFilters.replace(
        self.activeFilters.filter(item => item !== filter),
      );
    },

    resetDirectorsFilter() {
      self.activeFilters.replace([]);
    },
  }));

const directorsFilterStore = DirectorsFilterStore.create({
  activeFilters: [],
});

export default directorsFilterStore;
