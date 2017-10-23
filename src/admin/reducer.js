import {
  ADMIN_SEARCH_LOAD_DATA,
  ADMIN_LOAD_ADMIN_DATA,
} from './constants';

const INITIAL_STATE = {
  admins: [],
  form: {
    email: '',
    firstName: '',
    lastName: '',
    password: '',
  },
};

const reducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case ADMIN_SEARCH_LOAD_DATA: {
      return { ...state, admins: payload };
    }
    case ADMIN_LOAD_ADMIN_DATA: {
      return { ...state, form: payload };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
