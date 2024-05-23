import {SerializedError} from '@reduxjs/toolkit';
import {FetchBaseQueryError} from '@reduxjs/toolkit/query';

import {Film} from '../../types/models/film';

import {useFetchFilmsQuery} from './api';

interface FetchFilmsState {
  films: Film[] | undefined;
  loading: boolean;
  error: FetchBaseQueryError | SerializedError | undefined;
  retryFetchFilms: ReturnType<typeof useFetchFilmsQuery>['refetch'];
}

/**
 * Hook to fetch a list of films data from a remote server using RTKQuery data fetching tool
 *  which by default wraps around fetch API as the client.
 *
 * This hook handles the fetching of films data and manages the loading and error states.
 * It also provides a retry function to re-fetch the data if needed.
 *
 * @returns {FetchFilmsState} An object containing:
 *   - films: Fetched films data. We are going to use it in mutiple places in the app
 *     and we could send it to a global state container but we are going to pass the data
 *     through route param and props
 *   - loading: A boolean representing the loading state. Allows for loading state handling.
 *   - error: Error state or undefined.
 *   - retryFetchFilms: A function that can be called to retry the fetch operation in case
 *     of an error. This provides a way for the user to manually retry fetching the data if
 *     something goes wrong.
 */
const useFetchFilms = (): FetchFilmsState => {
  const {data, error, isLoading, refetch} = useFetchFilmsQuery();

  return {films: data, error, loading: isLoading, retryFetchFilms: refetch};
};

export default useFetchFilms;
