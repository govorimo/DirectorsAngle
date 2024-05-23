import {Instance, types} from 'mobx-state-tree';

import {Film} from './Film';
import {Interview} from './Interview';

const Director = types.model('Director', {
  id: types.identifierNumber,
  name: types.string,
  firstName: types.optional(types.string, ''),
  slug: types.string,
  image: types.string,
  biography: types.string,
  longBiography: types.optional(types.string, ''),
  country: types.string,
  city: types.string,
  region: types.string,
  yearsActive: types.string,
  learnMore: types.optional(types.array(types.string), []),
  interviews: types.optional(types.array(Interview), []),
  films: types.optional(types.array(Film), []),
  decadesActive: types.optional(types.array(types.string), []),
});

export {Director};

export interface IDirector extends Instance<typeof Director> {}
