import {useMemo} from 'react';

import {SerializedError} from '@reduxjs/toolkit';
import {FetchBaseQueryError} from '@reduxjs/toolkit/query';

import {Director} from '../../types/models/director';

import {useFetchDirectorQuery} from './api';

interface FetchDirectorState {
  director: Director | undefined;
  loading: boolean;
  error: FetchBaseQueryError | SerializedError | undefined;

  retryFetchDirector: ReturnType<typeof useFetchDirectorQuery>['refetch'];
}

/**
 * Hook to fetch a list of directors data from a remote server using RTKQuery data fetching tool
 *  which by default wraps around fetch API as the client.
 *
 * This hook handles the fetching of director data and manages the loading and error states.
 * It also provides a retry function to re-fetch the data if needed.
 *
 * @param {string} slug - The identifier for the director.
 *
 * @returns {FetchDirectorState} An object containing:
 *   - director: Fetched director data. We are going to use it in mutiple places in the app
 *     and we could send it to a global state container but we are going to pass the data
 *     through route param and props
 *   - loading: A boolean representing the loading state. Allows for loading state handling.
 *   - error: Error state or undefined.
 *   - retryFetchDirector: A function that can be called to retry the fetch operation in case
 *     of an error. This provides a way for the user to manually retry fetching the data if
 *     something goes wrong.
 */
const useFetchDirector = (slug: string): FetchDirectorState => {
  const {
    data: director,
    error,
    isLoading,
    refetch,
  } = useFetchDirectorQuery(slug);

  return {
    director,
    loading: isLoading,
    error: error,
    retryFetchDirector: refetch,
  };
};

/**
 * Hook to group data so it can be used for paging.
 *
 * @param {Array} data - The data to be grouped.
 * @param {number} pageSize - The number of items per group.
 *
 * @returns {Array} An array of grouped data.
 */
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
