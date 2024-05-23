import {useEffect} from 'react';

import {useDispatch, useSelector} from 'react-redux';

import {AppDispatch} from '../../store/store';
import {Director} from '../../types/models/director';
import {setFilteredDirectorsAction} from '../DirectorsAngle/actions';

import {selectActiveFilters} from './selectors';

const useFilteredDirectors = (directors: Director[]) => {
  const dispatch: AppDispatch = useDispatch();

  const activeFilters = useSelector(selectActiveFilters);
  const setFilteredDirectors = (filteredDirectors: Director[]) =>
    dispatch(setFilteredDirectorsAction(filteredDirectors));

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
