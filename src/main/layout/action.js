export const LAYOUT_SIDEBAR_OPEN = 'LAYOUT_SIDEBAR_OPEN';
export const LAYOUT_SIDEBAR_CLOSE = 'LAYOUT_SIDEBAR_CLOSE';
export const LAYOUT_URL_CHANGE = 'LAYOUT_URL_CHANGE';

export const openSideBar = () => ({
  type: LAYOUT_SIDEBAR_OPEN,
});

export const closeSideBar = () => ({
  type: LAYOUT_SIDEBAR_CLOSE,
});

export const changeUrl = url => ({
  type: LAYOUT_SIDEBAR_CLOSE,
  payload: url,
});
