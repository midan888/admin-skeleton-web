import { IAdminFormState } from './AdminForm/interfaces';
import { IAdminSearchState } from './AdminSearch/interfaces';

export type IAdminState = {
  form: IAdminFormState;
  search: IAdminSearchState;
}

export interface IAdministrator {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}
