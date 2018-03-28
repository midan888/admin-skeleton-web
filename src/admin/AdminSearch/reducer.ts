import { IAdminSearchState, IAction } from './interfaces';
import { ADMIN_SEARCH_SET_ADMINS } from './actions';

const initialState: IAdminSearchState = {
  items: [],
};

export const reducer = (state = initialState, { type, payload }: IAction) => {
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
