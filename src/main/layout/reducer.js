import {
  LAYOUT_SIDEBAR_OPEN,
  LAYOUT_SIDEBAR_CLOSE,
  LAYOUT_URL_CHANGE,
} from './action';

const initialState = {
  sideBarStatus: 1,
  activeRoute: '/',
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LAYOUT_SIDEBAR_OPEN:
      return {
        ...state,
        sideBarStatus: 1,
      };
    case LAYOUT_SIDEBAR_CLOSE:
      return {
        ...state,
        sideBarStatus: 0,
      };
    case LAYOUT_URL_CHANGE:
      return {
        ...state,
        activeRoute: payload,
      };
    default: {
      return state;
    }
  }
};

export default reducer;
