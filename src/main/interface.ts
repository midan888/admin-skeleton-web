import { IAdminState } from '../admin/interfaces';
import { ILayoutState } from './layout/interfaces';

export interface IAction {
  type: string;
  payload: any;
}

export interface IRootState {
  admin: IAdminState;
  layout: ILayoutState;
}

export type RequestType = (url: string, data: any) => Promise<any>;

export interface IAdministrator {
  firstName: string;
  lastName: string;
  email: string;
}
