import {useEffect} from 'react';

import {useDirectorsFilterStore} from '../../store/directorsFilterStore';
import {useDirectorsStore} from '../../store/directorsStore';
import {Director} from '../../types/models/director';

const useFilteredDirectors = (directors: Director[]) => {
  const activeFilters = useDirectorsFilterStore(state => state.activeFilters);
  const setFilteredDirectors = useDirectorsStore(
    state => state.setFilteredDirectors,
  );

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
  }, [activeFilters, directors]);
};

export default useFilteredDirectors;
