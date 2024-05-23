import React, {ReactNode} from 'react';

import {configureStore} from '@reduxjs/toolkit';
import {Provider} from 'react-redux';

import directorsReducer from '../screens/DirectorsAngle/slice';
import directorsFilterReducer from '../screens/FilterDirectors/slice';

const store = configureStore({
  reducer: {
    directors: directorsReducer,
    directorsFilter: directorsFilterReducer,
  },
});

export default store;

export const ReduxProvider: React.FC<{children: ReactNode}> = ({children}) => (
  <Provider store={store}>{children}</Provider>
);
