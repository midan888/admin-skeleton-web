import { IAction } from '../../main/interface';
import { ADMIN_FORM_CHANGE_MODEL } from './actions';
import { IAdminFormState } from './interfaces';

const initialState: IAdminFormState = {
  model: {
    id: 0,
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  },
};

export const reducer = (state = initialState, { type, payload }: IAction) => {
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


