import {combineReducers} from 'redux';

import DirectorReducer from '../screens/DirectorsAngle/reducer';
import DirectorsFilterReducer from '../screens/FilterDirectors/reducer';

const rootReducer = combineReducers({
  directors: DirectorReducer,
  directorsFilter: DirectorsFilterReducer,
});

export default rootReducer;
