import {useEffect} from 'react';

import {useAtomValue, useSetAtom} from 'jotai';

import {filteredDirectorsAtom} from '../../store/DirectorsAtom';
import {activeFiltersAtom} from '../../store/DirectorsFilterAtom';
import {Director} from '../../types/models/director';

const useFilteredDirectors = (directors: Director[]) => {
  const activeFilters = useAtomValue(activeFiltersAtom);
  const setFilteredDirectors = useSetAtom(filteredDirectorsAtom);

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
