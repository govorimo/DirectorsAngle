import {useState, useEffect, useCallback} from 'react';

import {BASE_URL, INTERVIEWS} from '../../constants';
import {fetcher} from '../../libs/fetcher';
import {Interview} from '../../types/models/interview';

interface FetchInterviewsState {
  interviews: Interview[] | undefined;
  loading: boolean;
  error: boolean;
  retryFetchInterviews: () => Promise<void>;
}

/**
 * Hook to fetch film data from a remote server using fetch as an API client.
 *
 * This hook handles the fetching of film data and manages the loading and error states.
 * It also provides a retry function to re-fetch the data if needed.
 *
 *
 * @returns {FetchInterviewsState} An object containing:
 *   - interviews: Fetched interviews data. We are going to use it in mutiple places in the app and we could send it to a global state container
 *     but we are going to pass the data through route param and props
 *   - loading: A boolean representing the loading state. Allows for loading state handling.
 *   - error: A boolean representing the error state. Allows for error state handling.
 *   - retryFetchInterviews: A function that can be called to retry the fetch operation in case
 *     of an error. This provides a way for the user to manually retry fetching the data if
 *     something goes wrong.
 */
const useFetchInterviews = (): FetchInterviewsState => {
  const [interviews, setInterviews] = useState<Interview[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchInterviews = useCallback(async () => {
    setLoading(true);
    setError(false);

    try {
      const responseData = await fetcher<Interview[]>(
        `${BASE_URL}${INTERVIEWS}`,
      );

      setInterviews(responseData);
    } catch (e) {
      setError(true);
      console.error('Error fetching interviews:', e);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchInterviews();
  }, [fetchInterviews]);

  return {interviews, loading, error, retryFetchInterviews: fetchInterviews};
};

export default useFetchInterviews;
