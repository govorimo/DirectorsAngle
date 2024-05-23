import {Media} from './media';

export interface Director {
  name: string;
  firstName: string;
  decadesActive: string[];
  country: string;
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
