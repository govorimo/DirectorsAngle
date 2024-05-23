import {Director} from './models/director';
import {Film} from './models/film';
import {Interview} from './models/interview';

export type RootStackParamList = {
  Director: {
    slug: string;
  };
  DirectorsAngle: undefined;
  Film: {film: Film};
  Films: undefined;
  Interview: {interview: Interview};
  Interviews: undefined;
  FilterDirectors: undefined;
  Biography: {
    director: Director;
  };
};

export type BottomTabParamList = {
  DirectorsTab: undefined;
  FilmsTab: undefined;
  InterviewsTab: undefined;
};

export enum Routes {
  DIRECTOR = 'Director',
  DIRECTORS = 'Directors',
  DIRECTORS_ANGLE = 'DirectorsAngle',
  FILTER_DIRECTORS = 'FilterDirectors',
  FILM = 'Film',
  FILMS = 'Films',
  INTERVIEW = 'Interview',
  INTERVIEWS = 'Interviews',
  BIOGRAPHY = 'Biography',
}

export enum BottomTabRoute {
  DIRECTORS = 'Directors',
  FILMS = 'Films',
  INTERVIEWS = 'Interviews',
}
