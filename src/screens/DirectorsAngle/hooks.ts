import {useEffect} from 'react';

import {QueryObserverResult, useQuery} from '@tanstack/react-query';

import {BASE_URL, DIRECTORS} from '../../constants';
import {useDirectorsContext} from '../../context/directorsContext';
import {fetcher} from '../../libs/fetcher';
import {Director} from '../../types/models/director';

interface FetchDirectorsState {
  loading: boolean;
  error: Error | null;
  retryFetchDirectors: () => Promise<QueryObserverResult<any, Error>>;
}

/**
 * Hook to fetch a list of directors data from a remote server using TanStack Query as a
 * data fetching tool.
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
  const {setDirectors} = useDirectorsContext();

  const fetchDirectors = async (): Promise<Director[]> => {
    return fetcher<Director[]>(`${BASE_URL}${DIRECTORS}`);
  };

  const {data, error, isLoading, isSuccess, refetch} = useQuery({
    queryKey: ['directors'],
    queryFn: fetchDirectors,
  });

  useEffect(() => {
    if (isSuccess && data) {
      setDirectors(data);
    }
  }, [isSuccess, data]);

  return {
    loading: isLoading,
    error: error,
    retryFetchDirectors: refetch,
  };
};

export default useFetchDirectors;
