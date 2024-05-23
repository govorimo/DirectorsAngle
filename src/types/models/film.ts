interface BasedOn {
  caption: string;
  name: string;
}

interface Cast {
  [actor: string]: string;
}

export interface Film {
  basedOn: BasedOn[];
  cast: Cast;
  description: string;
  experience: string;
  id: number;
  screenplay: string[];
  thumbnail: string;
  title: string;
  trailerLink: string;
  trivia: string[];
  year: number;
}
