import {useEffect} from 'react';

import {useRecoilValue, useSetRecoilState} from 'recoil';

import {filteredDirectorsState} from '../../store/DirectorsState';
import {activeFiltersState} from '../../store/DirectorsFilterState';
import {Director} from '../../types/models/director';

const useFilteredDirectors = (directors: Director[]) => {
  const activeFilters = useRecoilValue(activeFiltersState);
  const setFilteredDirectors = useSetRecoilState(filteredDirectorsState);

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
