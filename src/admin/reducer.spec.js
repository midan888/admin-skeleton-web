import reducer from './reducer';
import { ADMIN_SEARCH_LOAD_DATA } from './constants';

describe('admin:search:reducer', () => {
  test('reducer', () => {
    const admins = [{ name: 'mika' }];
    const state = reducer({}, { type: ADMIN_SEARCH_LOAD_DATA, payload: admins });

    expect(state.admins).toBe(admins);
  });
});
