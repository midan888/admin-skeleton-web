import { IAction } from '../../main/interface';
import { ADMIN_FORM_CHANGE_MODEL } from './actions';

const initialState = {
  model: {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  },
};

const reducer = (state = initialState, { type, payload }: IAction) => {
  switch (type) {
    case ADMIN_FORM_CHANGE_MODEL:
      return {
        ...state,
        model: payload.model,
      };
    default: {
      return state;
    }
  }
};

export default reducer;