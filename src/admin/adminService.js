import request from '../main/utils/request';

export const findAdminById = async (id) => {
  const data = await request('admin/findOne', {
    id,
  });

  return data;
};

export const deleteAdmin = async (id) => {
  const data = await request('admin/deleteOne', {
    id,
  });

  return data;
};
