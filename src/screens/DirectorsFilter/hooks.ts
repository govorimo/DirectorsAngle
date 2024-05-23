import {useEffect} from 'react';

import {useDirectorsContext} from '../../context/directorsContext';
import {useDirectorsFilterContext} from '../../context/directorsFilterContext';
import {Director} from '../../types/models/director';

const useFilteredDirectors = (directors: Director[]) => {
  const {activeFilters} = useDirectorsFilterContext();
  const {setFilteredDirectors} = useDirectorsContext();

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
