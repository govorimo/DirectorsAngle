import {useEffect} from 'react';

import {SerializedError} from '@reduxjs/toolkit';
import {FetchBaseQueryError} from '@reduxjs/toolkit/query';
import {useDispatch} from 'react-redux';

import {useFetchDirectorsQuery} from './api';
import {setDirectors} from './slice';

interface FetchDirectorsState {
  loading: boolean;
  error: FetchBaseQueryError | SerializedError | undefined;
  retryFetchDirectors: ReturnType<typeof useFetchDirectorsQuery>['refetch'];
}

/**
 *  Hook to fetch a list of directors data from a remote server using RTKQuery data fetching tool
 *  which by default wraps around fetch API as the client.
 *
 * This hook handles the fetching of director data and manages the loading and error states.
 * It also provides a retry function to re-fetch the data if needed.
 *
 * @returns {FetchDirectorsState} An object containing:
 *   - loading: A boolean representing the loading state. Allows for loading state handling.
 *   - error: Error state or undefined.
 *   - retryFetchDirectors: A function that can be called to retry the fetch operation in case
 *     of an error. This provides a way for the user to manually retry fetching the data if
 *     something goes wrong.
 *
 * Note: The hook does not return a list of directors. Instead, it sets the fetched
 * directors list in a context, making it accessible throughout the app.
 */
const useFetchDirectors = (): FetchDirectorsState => {
  const dispatch = useDispatch();

  const {data, error, isLoading, refetch} = useFetchDirectorsQuery();

  useEffect(() => {
    if (data) {
      dispatch(setDirectors(data));
    }
  }, [data, dispatch]);

  return {
    loading: isLoading,
    error: error,
    retryFetchDirectors: refetch,
  };
};

export default useFetchDirectors;
