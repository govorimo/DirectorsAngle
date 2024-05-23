import React, {ReactNode} from 'react';

import {configureStore} from '@reduxjs/toolkit';
import {Provider} from 'react-redux';

import {directorApi} from '../screens/Director/api';
import {directorsApi} from '../screens/DirectorsAngle/api';
import directorsReducer from '../screens/DirectorsAngle/slice';
import {filmsApi} from '../screens/Films/api';
import directorsFilterReducer from '../screens/FilterDirectors/slice';
import {interviewsApi} from '../screens/Interviews/api';

const store = configureStore({
  reducer: {
    directors: directorsReducer,
    directorsFilter: directorsFilterReducer,
    [directorsApi.reducerPath]: directorsApi.reducer,
    [directorApi.reducerPath]: directorApi.reducer,
    [filmsApi.reducerPath]: filmsApi.reducer,
    [interviewsApi.reducerPath]: interviewsApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(
      directorsApi.middleware,
      directorApi.middleware,
      filmsApi.middleware,
      interviewsApi.middleware,
    ),
});

export default store;

export const ReduxProvider: React.FC<{children: ReactNode}> = ({children}) => (
  <Provider store={store}>{children}</Provider>
);
