import {useState, useEffect, useCallback} from 'react';

import {useDispatch} from 'react-redux';

import {BASE_URL, DIRECTORS} from '../../constants';
import {fetcher} from '../../libs/fetcher';
import {Director} from '../../types/models/director';

import {setDirectors} from './actions';

interface FetchDirectorsState {
  loading: boolean;
  error: boolean;
  retryFetchDirectors: () => Promise<void>;
}

/**
 * Hook to fetch a list of directors data from a remote server using fetch as an API client.
 *
 * This hook handles the fetching of director data and manages the loading and error states.
 * It also provides a retry function to re-fetch the data if needed.
 *
 * @returns {FetchDirectorsState} An object containing:
 *   - loading: A boolean representing the loading state. Allows for loading state handling.
 *   - error: A boolean representing the error state. Allows for error state handling.
 *   - retryFetchDirectors: A function that can be called to retry the fetch operation in case
 *     of an error. This provides a way for the user to manually retry fetching the data if
 *     something goes wrong.
 *
 * Note: The hook does not return a list of directors. Instead, it sets the fetched
 * directors list in a context, making it accessible throughout the app.
 */
const useFetchDirectors = (): FetchDirectorsState => {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchDirectors = useCallback(async () => {
    setLoading(true);
    setError(false);

    try {
      const responseData = await fetcher<Director[]>(`${BASE_URL}${DIRECTORS}`);

      dispatch(setDirectors(responseData));
    } catch (e) {
      setError(true);
      console.error('Error fetching directors:', e);
    } finally {
      setLoading(false);
    }
  }, []);

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
