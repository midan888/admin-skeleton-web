import { IAction } from '../../main/interface';

export type IAdminModel = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password?: string;
  confirmPassword?: string;
  [key:string]: string|number;
};

export type IAdminFormState = {
  model: IAdminModel;
};

export type ChangeModelType = (model: IAdminModel) => IAction;
export type SubmitModelType = (model: IAdminModel) => (dispatch: any) => Promise<any>;
