import {Director} from '../../types/models/director';

export const filterSearchSuggestions = (
  directors: Director[],
  lowerCaseQuery: string,
): Director[] => {
  return directors.filter(
    (director: Director) =>
      director.name.toLowerCase().includes(lowerCaseQuery) ||
      director.country.toLowerCase().includes(lowerCaseQuery),
  );
};

export const getSearchSuggestions = (
  directors: Director[],
  lowerCaseQuery: string,
): string[] =>
  directors
    .filter(
      (director: Director) =>
        director.name.toLowerCase().includes(lowerCaseQuery) ||
        director.country.toLowerCase().includes(lowerCaseQuery),
    )
    .map((director: Director) => director.name);

export const searchDirectors = (
  directors: Director[],
  query: string,
): Director[] => {
  let filtered = directors;

  if (query) {
    const lowerCaseQuery = query.toLowerCase();
    filtered = filterSearchSuggestions(filtered, lowerCaseQuery);
  }

  return filtered;
};
