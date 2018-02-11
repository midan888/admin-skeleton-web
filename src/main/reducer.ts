import { combineReducers, AnyAction } from 'redux';
import admin from '../admin/reducer';

const root = combineReducers({
  admin,
});

export default root;
