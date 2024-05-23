import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

import {BASE_URL, INTERVIEWS} from '../../constants';
import {Interview} from '../../types/models/interview';

export const interviewsApi = createApi({
  reducerPath: 'interviewsApi',
  baseQuery: fetchBaseQuery({baseUrl: BASE_URL}),
  endpoints: builder => ({
    fetchInterviews: builder.query<Interview[], void>({
      query: () => `${INTERVIEWS}`,
    }),
  }),
});

export const {useFetchInterviewsQuery} = interviewsApi;
