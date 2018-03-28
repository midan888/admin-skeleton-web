import {
  LAYOUT_SIDEBAR_OPEN,
  LAYOUT_SIDEBAR_CLOSE,
  LAYOUT_URL_CHANGE,
} from './action';
import { ILayoutState, SideBarStatus } from './interfaces';
import { IAction } from '../interface';

const initialState: ILayoutState = {
  sideBarStatus: SideBarStatus.closed,
  activeRoute: '/',
};

export const reducer = (state = initialState, { type, payload }: IAction) => {
  switch (type) {
    case LAYOUT_SIDEBAR_OPEN:
      return {
        ...state,
        sideBarStatus: SideBarStatus.open,
      };
    case LAYOUT_SIDEBAR_CLOSE:
      return {
        ...state,
        sideBarStatus: SideBarStatus.closed,
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

