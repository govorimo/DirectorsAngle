import React, {ReactNode} from 'react';

import {configureStore} from '@reduxjs/toolkit';
import {Provider} from 'react-redux';

import rootReducer from './rootReducer';

const store = configureStore({
  reducer: rootReducer,
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;

export const ReduxProvider: React.FC<{children: ReactNode}> = ({children}) => (
  <Provider store={store}>{children}</Provider>
);
