import {types} from 'mobx-state-tree';

const Film = types.model('Film', {
  id: types.identifierNumber,
  thumbnail: types.string,
  trailerLink: types.string,
  title: types.string,
  year: types.number,
  description: types.string,
  screenplay: types.array(types.string),
  basedOn: types.array(
    types.model({
      caption: types.string,
      name: types.string,
    }),
  ),
  cast: types.map(types.string),
  trivia: types.array(types.string),
  experience: types.string,
});

export {Film};
