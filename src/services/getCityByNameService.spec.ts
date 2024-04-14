import { api } from './api';
import { getCityByNameService } from './getCityByNameService';

import { mockCityAPIResponse } from '@__tests__/mocks/mockCityAPIResponse';
describe('API: getCityByNameService', () => {
  it('should return city information', async () => {
    jest.spyOn(api, 'get').mockResolvedValue({ data: mockCityAPIResponse });
    const response = await getCityByNameService('Fortaleza');

    expect(response.length).toBeGreaterThan(0);
  });
});
