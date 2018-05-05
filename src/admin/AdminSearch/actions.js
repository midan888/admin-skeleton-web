export const ADMIN_SEARCH_LOAD_ADMINS = 'ADMIN_SEARCH_LOAD_ADMINS';
export const ADMIN_SEARCH_REQUEST_ADMINS = 'ADMIN_SEARCH_REQUEST_ADMINS';
export const ADMIN_SEARCH_SET_ADMINS = 'ADMIN_SEARCH_SET_ADMINS';

export const requestAdmins = () => async (dispatch, getState, request) => {
  const response = await request('/admin/search');

  dispatch({
    type: ADMIN_SEARCH_SET_ADMINS,
    payload: response,
  });
};
