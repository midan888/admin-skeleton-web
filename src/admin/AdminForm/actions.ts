import { IAdminModel } from './interfaces';
import { AnyAction, Dispatch} from 'redux';
import { RequestType } from '../../main/interface';
import request from '../../main/utils/request';
import { ROUTE_CREATE_ADMIN } from '../routes';

export const ADMIN_FORM_CHANGE_MODEL = 'ADMIN_FORM_CHANGE_MODEL';

export const changeModel = (model: IAdminModel): AnyAction => ({
  type: ADMIN_FORM_CHANGE_MODEL,
  payload: {
    model,
  },
});

export const submitModel = (model: IAdminModel) => async (dispatch: any) => {
  const res = await request(ROUTE_CREATE_ADMIN, model);
}
