import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

import {BASE_URL, FILMS} from '../../constants';
import {Film} from '../../types/models/film';

export const filmsApi = createApi({
  reducerPath: 'filmsApi',
  baseQuery: fetchBaseQuery({baseUrl: BASE_URL}),
  endpoints: builder => ({
    fetchFilms: builder.query<Film[], void>({
      query: () => `${FILMS}`,
    }),
  }),
});

export const {useFetchFilmsQuery} = filmsApi;
