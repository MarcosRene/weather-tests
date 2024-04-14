import {
  getStorageCity,
  saveStorageCity,
  removeStorageCity,
} from '@libs/asyncStorage/cityStorage';
import { CityProps } from '@services/getCityByNameService';

const newCity: CityProps = {
  id: '1',
  name: 'Fortaleza',
  latitude: 123,
  longitude: 456,
};

describe('Storage: cityStorage', () => {
  it("should be return null when don't have a city storaged", async () => {
    const response = await getStorageCity();

    expect(response).toBeNull();
  });

  it('should be return city storaged', async () => {
    await saveStorageCity(newCity);
    const response = await getStorageCity();

    expect(response).toEqual(newCity);
  });

  it('should be return remove city storaged', async () => {
    await saveStorageCity(newCity);
    await removeStorageCity();

    const response = await getStorageCity();
    expect(response).toBeNull();
  });
});
