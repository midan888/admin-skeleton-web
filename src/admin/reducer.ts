import { combineReducers, AnyAction } from 'redux';
import reducer from './AdminForm/reducer';

const adminReducers = combineReducers({
  createForm: reducer,
});

export default adminReducers;
