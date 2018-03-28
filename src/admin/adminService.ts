import request from '../main/utils/request';
import { IAdministrator } from './interfaces';

export const findAdminById = async (id: number): Promise<IAdministrator> => {
  const data = await request('admin/findOne', {
    id,
  });

  return data;
};

export const deleteAdmin = async(id: number): Promise<void> => {
  const data = await request('admin/deleteOne', {
    id,
  });

  return data;
};
