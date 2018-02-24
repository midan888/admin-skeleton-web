import { combineReducers, AnyAction } from 'redux';
import { reducer as form } from './AdminForm/reducer';
import { reducer as search } from './AdminSearch/reducer';

const adminReducers = combineReducers({
  form,
  search,
});

export default adminReducers;
