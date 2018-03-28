import { combineReducers, AnyAction } from 'redux';
import { adminReducers as admin } from '../admin/reducer';
import { reducer as layout } from './layout/reducer';

const root = combineReducers({
  admin,
  layout,
});

export default root;
