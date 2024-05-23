import {useState, useEffect, useMemo, useCallback} from 'react';

import {DIRECTOR} from '../../constants';
import apiClient from '../../libs/apiClient';
import {Director} from '../../types/models/director';

interface FetchDirectorState {
  director: Director | undefined;
  loading: boolean;
  error: boolean;
  retryFetchDirector: () => Promise<void>;
}

/*
This hook fetches director data from a remote server using axios as an api client


The hook returns:
- director data, we are going to use it in mutiple places in the app and we could send it to a global state container
but we are going to pass the data through route param and props this time
- the loading and error states of the call to the component who called the hook, so the component can then handle the said states
- retryFetchDirector, acts as a gateway function our view can call to make the api call retry
*/
const useFetchDirector = (slug: string): FetchDirectorState => {
  const [director, setDirector] = useState<Director>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchDirector = useCallback(async () => {
    setLoading(true);

    try {
      const response = await apiClient.get<Director>(`${DIRECTOR}/${slug}`);
      setDirector(response.data);
    } catch (e) {
      setError(true);
      console.error('Error fetching director data:', e);
    } finally {
      setLoading(false);
    }
  }, [slug]);

  useEffect(() => {
    fetchDirector();
  }, [fetchDirector]);

  return {director, loading, error, retryFetchDirector: fetchDirector};
};

export const useGroupedData = <T>(data: T[], pageSize: number): T[][] => {
  return useMemo(() => {
    if (!data || pageSize <= 0) {
      return [];
    }

    const groupedData: T[][] = [];
    for (let i = 0; i < data.length; i += pageSize) {
      groupedData.push(data.slice(i, i + pageSize));
    }
    return groupedData;
  }, [data, pageSize]);
};

export default useFetchDirector;
