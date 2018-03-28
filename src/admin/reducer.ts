import { combineReducers, AnyAction } from 'redux';
import { reducer as form } from './AdminForm/reducer';
import { reducer as search } from './AdminSearch/reducer';

export const adminReducers = combineReducers({
  form,
  search,
});

