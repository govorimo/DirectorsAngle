import {Media} from './media';

export interface Director {
  id: number;
  name: string;
  firstName: string;
  decadesActive: string[];
  country: string;
  region: string;
  biography: string;
  longBiography: string;
  image: string;
  yearsActive: string;
  city: string;
  films: Media[];
  slug: string;
  interviews: Media[];
  learnMore: string[];
}
