import {useEffect} from 'react';

import directorsFilterStore from '../../store/DirectorsFilterState';
import directorsStore from '../../store/DirectorsState';
import {Director} from '../../types/models/director';

const useFilteredDirectors = (directors: Director[]) => {
  const activeFilters = directorsFilterStore.activeFilters;
  const setFilteredDirectors = (filteredDirectors: Director[]) =>
    directorsStore.setFilteredDirectors(filteredDirectors);

  useEffect(() => {
    const newlyFilteredDirectors = directors.filter(director => {
      const matchesDecade = activeFilters.some(item =>
        director.decadesActive.includes(item),
      );
      const matchesCountry = activeFilters.some(
        item => director.country === item,
      );
      return matchesDecade || matchesCountry;
    });

    setFilteredDirectors(newlyFilteredDirectors);
  }, [activeFilters, directors, setFilteredDirectors]);
};

export default useFilteredDirectors;
