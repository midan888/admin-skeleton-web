import { combineReducers, AnyAction } from 'redux';
import reducer from './AdminForm/reducer';

const adminReducers = combineReducers({
  form: reducer,
});

export default adminReducers;
