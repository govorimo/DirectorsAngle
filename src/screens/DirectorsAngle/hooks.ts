import {useState, useEffect, useCallback} from 'react';

import {useDispatch} from 'react-redux';

import {DIRECTORS} from '../../constants';
import apiClient from '../../libs/apiClient';
import {Director} from '../../types/models/director';

import {setDirectors} from './slice';

interface FetchDirectorsState {
  loading: boolean;
  error: boolean;
  retryFetchDirectors: () => Promise<void>;
}

/*
This hook fetches directors data from a remote server using axios as an api client
It dispatches the fetched data to the redux store since we need to use it in multiple places in the app,
We use the fetched directors data in a component we with a selector

The hook returns
- the loading and error states of the call to the component who called the hook, so the component can then handle the said states
This is not put into a global state, as it does not meet our use case (we would put it if we wanted to have for example error state on all components when one of the hook calls fail)
- retryFetchDirectors function is exposed so we can make the call again from our view
*/
const useFetchDirectors = (): FetchDirectorsState => {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchDirectors = useCallback(async () => {
    setLoading(true);

    try {
      const response = await apiClient.get<Director[]>(`${DIRECTORS}`);

      dispatch(setDirectors(response.data));
    } catch (e) {
      setError(true);
      console.error('Error fetching directors:', e);
    } finally {
      setLoading(false);
    }
  }, [dispatch]);

  useEffect(() => {
    fetchDirectors();
  }, [fetchDirectors]);

  return {
    loading,
    error,
    retryFetchDirectors: fetchDirectors,
  };
};

export default useFetchDirectors;
