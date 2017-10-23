import {
  ADMIN_SEARCH_LOAD_DATA,
  ADMIN_SEARCH_REQUEST_FAILED,
  ADMIN_LOAD_ADMIN_DATA,
} from './constants';

export const loadSearchData = data => ({
  type: ADMIN_SEARCH_LOAD_DATA,
  payload: data,
});

export const showRequestFailed = () => ({
  type: ADMIN_SEARCH_REQUEST_FAILED,
});

export const requestSearchData = () => (dispatch, getState, request) => (
  request('/admin/search').then((data) => {
    dispatch(loadSearchData(data));
  }).catch(() => {
    dispatch(showRequestFailed());
  })
);

export const loadAdminData = data => ({
  type: ADMIN_LOAD_ADMIN_DATA,
  payload: data,
});

export const requestAdminData = id => (dispatch, getState, request) => (
  request('/admin/findById', {
    id,
  }).then((data) => {
    dispatch(loadAdminData(data));
  }).catch(() => {
    dispatch(showRequestFailed());
  })
);
