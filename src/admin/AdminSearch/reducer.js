import { ADMIN_SEARCH_SET_ADMINS } from './actions';

const initialState = {
  items: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADMIN_SEARCH_SET_ADMINS:
      return {
        ...state,
        items: payload,
      };
    default: {
      return state;
    }
  }
};

export default reducer;
