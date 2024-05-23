import {Director} from '../../types/models/director';

export const getUniqueDecades = (directors: Director[]): string[] => {
  return [
    ...new Set(
      directors.flatMap((director: Director) => director.decadesActive).sort(),
    ),
  ] as string[];
};

export const getUniqueCountriesBorn = (directors: Director[]): string[] => {
  return [
    ...new Set(
      directors.flatMap((director: Director) => director.country).sort(),
    ),
  ] as string[];
};
