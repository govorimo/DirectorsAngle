import {useEffect} from 'react';

import {useDispatch, useSelector} from 'react-redux';

import {Director} from '../../types/models/director';
import {setFilteredDirectors} from '../DirectorsAngle/slice';

import {selectDirectorsFilter} from './selectors';

const useFilteredDirectors = (directors: Director[]) => {
  const dispatch = useDispatch();
  const {activeFilters} = useSelector(selectDirectorsFilter);

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

    dispatch(setFilteredDirectors(newlyFilteredDirectors));
  }, [activeFilters, directors]);
};

export default useFilteredDirectors;
