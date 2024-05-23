import {useState, useEffect, useCallback} from 'react';

import {FILMS} from '../../constants';
import apiClient from '../../libs/apiClient';
import {Film} from '../../types/models/film';

/*
This hook fetches director data from a remote server using axios as an api client


The hook returns:
- director data, we are going to use it in mutiple places in the app and we could send it to a global state container
but we are going to pass the data through route param and props this time
- the loading and error states of the call to the component who called the hook, so the component can then handle the said states
- retryFetchDirector, acts as a gateway function our view can call to make the api call retry
*/
const useFetchFilms = () => {
  const [films, setFilms] = useState<Film[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchFilms = useCallback(async () => {
    setLoading(true);

    try {
      const response = await apiClient.get<Film[]>(`${FILMS}`);

      setFilms(response.data);
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
