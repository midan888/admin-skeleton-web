import { combineReducers } from 'redux';
import { reducer as admin } from 'admin/index';

const root = combineReducers({
  admin,
});

export default root;
