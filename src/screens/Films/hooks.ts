import {useState, useEffect, useCallback} from 'react';

import {API, BASE_URL} from '../../constants';
import {fetcher} from '../../libs/fetcher';
import {Film} from '../../types/models/film';

interface FetchFilmsState {
  films: Film[] | undefined;
  loading: boolean;
  error: boolean;
  retryFetchFilms: () => Promise<void>;
}

/**
 * Hook to fetch film data from a remote server using fetch as an API client.
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
  const [films, setFilms] = useState<Film[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchFilms = useCallback(async () => {
    setLoading(true);
    setError(false);

    try {
      const responseData = await fetcher<Film[]>(`${BASE_URL}${API.FILMS}`);

      setFilms(responseData);
    } catch (e) {
      setError(true);
      console.error('Error fetching films:', e);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchFilms();
  }, [fetchFilms]);

  return {films, loading, error, retryFetchFilms: fetchFilms};
};

export default useFetchFilms;
