import {types} from 'mobx-state-tree';

const Interview = types.model('Interview', {
  id: types.identifierNumber,
  thumbnail: types.string,
  link: types.string,
  title: types.string,
  year: types.number,
  interviewer: types.string,
  info: types.string,
  source: types.string,
});

export {Interview};
