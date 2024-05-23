import React, {createContext, useState, useContext, ReactNode} from 'react';

import {
  DirectorsContextType,
  SetDirectorsPayload,
  SetFilteredDirectorsPayload,
  SetFiltersActivePayload,
  SetSearchActivePayload,
} from '../types/context';
import {Director} from '../types/models/director';
import {calculateDecadesActive} from '../utils';

const DirectorsContext = createContext<DirectorsContextType>({
  directors: [],
  setDirectors: () => null,
  filteredDirectors: [],
  setFilteredDirectors: () => null,
  numOfFiltersActive: 0,
  setNumOfFiltersActive: () => null,
  searchActive: false,
  setSearchActive: () => null,
  resetNumOfFiltersActive: () => null,
});

export const DirectorsProvider = ({children}: {children: ReactNode}) => {
  const [directors, setDirectorsState] = useState<Director[]>([]);
  const [filteredDirectors, setFilteredDirectorsState] = useState<Director[]>(
    [],
  );
  const [numOfFiltersActive, setNumOfFiltersActiveState] = useState<number>(0);
  const [searchActive, setSearchActiveState] = useState<boolean>(false);

  const setDirectors = (payload: SetDirectorsPayload) => {
    setDirectorsState(
      payload.map(director => ({
        ...director,
        decadesActive: calculateDecadesActive(director.yearsActive),
      })),
    );
  };

  const setFilteredDirectors = (payload: SetFilteredDirectorsPayload) => {
    setFilteredDirectorsState(payload);
  };

  const setNumOfFiltersActive = (payload: SetFiltersActivePayload) => {
    setNumOfFiltersActiveState(prevCount => prevCount + payload);
  };

  const setSearchActive = (payload: SetSearchActivePayload) => {
    setSearchActiveState(payload);
  };

  const resetNumOfFiltersActive = () => {
    setNumOfFiltersActiveState(0);
  };

  return (
    <DirectorsContext.Provider
      value={{
        directors,
        setDirectors,
        filteredDirectors,
        setFilteredDirectors,
        numOfFiltersActive,
        setNumOfFiltersActive,
        searchActive,
        setSearchActive,
        resetNumOfFiltersActive,
      }}>
      {children}
    </DirectorsContext.Provider>
  );
};

export const useDirectorsContext = () => useContext(DirectorsContext);
