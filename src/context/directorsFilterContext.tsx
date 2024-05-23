import React, {createContext, useState, useContext, ReactNode} from 'react';

import {DirectorsFilterContextType} from '../types/context';

const DirectorsFilterContext = createContext<DirectorsFilterContextType>({
  activeFilters: [],
  addItemToActiveFilter: () => null,
  removeItemFromActiveFilter: () => null,
  resetDirectorsFilter: () => null,
});

export const DirectorsFilterProvider = ({children}: {children: ReactNode}) => {
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  const addItemToActiveFilter = (payload: string) => {
    setActiveFilters(prevFilters => [...prevFilters, payload]);
  };

  const removeItemFromActiveFilter = (payload: string) => {
    setActiveFilters(prevFilters =>
      prevFilters.filter(item => item !== payload),
    );
  };

  const resetDirectorsFilter = () => {
    setActiveFilters([]);
  };

  return (
    <DirectorsFilterContext.Provider
      value={{
        activeFilters,
        addItemToActiveFilter,
        removeItemFromActiveFilter,
        resetDirectorsFilter,
      }}>
      {children}
    </DirectorsFilterContext.Provider>
  );
};

export const useDirectorsFilterContext = () =>
  useContext(DirectorsFilterContext);
