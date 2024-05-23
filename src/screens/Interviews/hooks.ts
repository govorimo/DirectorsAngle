import useSWR, {KeyedMutator} from 'swr';

import {BASE_URL, INTERVIEWS} from '../../constants';
import {fetcher} from '../../libs/fetcher';
import {Interview} from '../../types/models/interview';

interface FetchInterviewsState {
  interviews: Interview[] | undefined;
  loading: boolean;
  error: Error | undefined;
  retryFetchInterviews: KeyedMutator<Interview[]>;
}

/**
 * Hook to fetch film data from a remote server using SWR as a data fetching tool.
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
  const {data, error, isValidating, mutate} = useSWR<Interview[], Error>(
    `${BASE_URL}${INTERVIEWS}`,
    fetcher,
  );

  return {
    interviews: data,
    loading: isValidating,
    error: error,
    retryFetchInterviews: mutate,
  };
};

export default useFetchInterviews;
