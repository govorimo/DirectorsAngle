import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

import {BASE_URL, DIRECTOR} from '../../constants';
import {Director} from '../../types/models/director';

export const directorApi = createApi({
  reducerPath: 'directorApi',
  baseQuery: fetchBaseQuery({baseUrl: BASE_URL}),
  endpoints: builder => ({
    fetchDirector: builder.query<Director, string>({
      query: slug => `${DIRECTOR}/${slug}`,
    }),
  }),
});

export const {useFetchDirectorQuery} = directorApi;
