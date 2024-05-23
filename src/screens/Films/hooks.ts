import {
  QueryObserverResult,
  RefetchOptions,
  useQuery,
} from '@tanstack/react-query';

import {BASE_URL, FILMS} from '../../constants';
import {fetcher} from '../../libs/fetcher';
import {Film} from '../../types/models/film';

interface FetchFilmsState {
  films: Film[] | undefined;
  loading: boolean;
  error: Error | null;
  retryFetchFilms: (
    options?: RefetchOptions | undefined,
  ) => Promise<QueryObserverResult<any, Error>>;
}

/**
 * Hook to fetch film data from a remote server using TanStack Query as a
 * data fetching tool.
 *
 * This hook handles the fetching of film data and manages the loading and error states.
 * It also provides a retry function to re-fetch the data if needed.
 *
 *
 * @returns {FetchFilmsState} An object containing:
 *   - films: Fetched films data. We are going to use it in mutiple places in the app and we could send it to a global state container
 *     but we are going to pass the data through route param and props
 *   - loading: A boolean representing the loading state. Allows for loading state handling.
 *   - error: A boolean representing the error state. Allows for error state handling.
 *   - retryFetchFilms: A function that can be called to retry the fetch operation in case
 *     of an error. This provides a way for the user to manually retry fetching the data if
 *     something goes wrong.
 */
const useFetchFilms = (): FetchFilmsState => {
  const fetchFilms = async (): Promise<Film[]> => {
    return fetcher<Film[]>(`${BASE_URL}${FILMS}`);
  };

  const {data, error, isLoading, refetch} = useQuery({
    queryKey: ['films'],
    queryFn: fetchFilms,
  });

  return {films: data, loading: isLoading, error, retryFetchFilms: refetch};
};

export default useFetchFilms;
