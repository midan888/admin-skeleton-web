import { ADMIN_FORM_CHANGE_MODEL } from './actions';

const initialState = {
  model: {
    id: 0,
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  },
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADMIN_FORM_CHANGE_MODEL:
      return {
        ...state,
        model: {
          ...payload.model,
        },
      };
    default: {
      return state;
    }
  }
};

export default reducer;
