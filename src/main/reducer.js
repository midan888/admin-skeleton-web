import { combineReducers } from 'redux';
import admin from '../admin/reducer';
import layout from './layout/reducer';

const root = combineReducers({
  admin,
  layout,
});

export default root;
