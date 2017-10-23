import {
  ADMIN_SEARCH_LOAD_DATA,
} from './constants';
import { loadSearchData, requestSearchData } from './actions';

describe('admin:search:actions', () => {
  test('loadSearchData', () => {
    const data = [];
    const action = loadSearchData(data);

    expect(action.type).toBe(ADMIN_SEARCH_LOAD_DATA);
    expect(action.payload).toBe(data);
  });

  test('requestSearchData', () => {
    const adminList = [];
    const dispatch = jest.fn();
    const request = jest.fn(() => Promise.resolve({ data: adminList }));

    return requestSearchData()(dispatch, null, request).then(() => {
      const action = dispatch.mock.calls[0][0];
      const path = request.mock.calls[0][0];

      expect(action.type).toBe(ADMIN_SEARCH_LOAD_DATA);
      expect(action.payload).toBe(adminList);
      expect(path).toBe('/admin/search');
    });
  });
});
