import { combineReducers } from 'redux';
import form from './AdminForm/reducer';
import search from './AdminSearch/reducer';

const adminReducers = combineReducers({
  form,
  search,
});

export default adminReducers;
