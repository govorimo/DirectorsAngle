import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

import {BASE_URL, DIRECTORS} from '../../constants';
import {Director} from '../../types/models/director';

export const directorsApi = createApi({
  reducerPath: 'directorsApi',
  baseQuery: fetchBaseQuery({baseUrl: BASE_URL}),
  endpoints: builder => ({
    fetchDirectors: builder.query<Director[], void>({
      query: () => `${DIRECTORS}`,
    }),
  }),
});

export const {useFetchDirectorsQuery} = directorsApi;
