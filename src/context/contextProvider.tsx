import React, {ReactNode} from 'react';

import {DirectorsProvider} from './directorsContext';
import {DirectorsFilterProvider} from './directorsFilterContext';

const ContextProvider = ({children}: {children: ReactNode}) => {
  return (
    <DirectorsProvider>
      <DirectorsFilterProvider>{children}</DirectorsFilterProvider>
    </DirectorsProvider>
  );
};

export default ContextProvider;
