import { IAdminModel } from './interfaces';

export const ADMIN_FORM_CHANGE_MODEL = 'ADMIN_FORM_CHANGE_MODEL';

export const changeModel = (model: IAdminModel) => ({
  type: ADMIN_FORM_CHANGE_MODEL,
  payload: {
    model,
  },
});
