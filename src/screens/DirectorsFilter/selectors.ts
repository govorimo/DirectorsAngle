import {RootState} from '../../types/store';

export const selectDirectorsFilter = (state: RootState) =>
  state.directorsFilter;
