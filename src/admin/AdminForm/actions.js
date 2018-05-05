import request from '../../main/utils/request';
import { ROUTE_CREATE_ADMIN } from '../routes';
import { findAdminById, deleteAdmin } from '../adminService';

export const ADMIN_FORM_CHANGE_MODEL = 'ADMIN_FORM_CHANGE_MODEL';

export const changeModel = model => ({
  type: ADMIN_FORM_CHANGE_MODEL,
  payload: {
    model,
  },
});

export const submitModel = model => async () => request(ROUTE_CREATE_ADMIN, model);

export const requestAdmin = id => async (dispatch) => {
  const administrator = await findAdminById(id);

  const model = {
    id: administrator.id,
    firstName: administrator.firstName,
    lastName: administrator.lastName,
    email: administrator.email,
  };

  dispatch(changeModel(model));
};

export const requestAdminDelete = id => async (dispatch) => {
  await deleteAdmin(id);

  dispatch();
};
