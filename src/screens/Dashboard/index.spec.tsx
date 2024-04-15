import {
  render,
  screen,
  fireEvent,
  waitFor,
  waitForElementToBeRemoved,
  act,
} from '@__tests__/utils/customRender';
import { mockWeatherAPIResponse } from '@__tests__/mocks/api/mockWeatherAPIResponse';
import { Dashboard } from '@screens/Dashboard';
import { api } from '@services/api';
import { saveStorageCity } from '@libs/asyncStorage/cityStorage';
import { mockCityAPIResponse } from '@__tests__/mocks/api/mockCityAPIResponse';

describe('Screen: Dashboard', () => {
  beforeAll(async () => {
    const city = {
      id: '1',
      name: 'Fortaleza, CE',
      latitude: 123,
      longitude: 456,
    };

    await saveStorageCity(city);
  })
  it('should be show city weather', async () => {
    jest.spyOn(api, 'get').mockResolvedValue({ data: mockWeatherAPIResponse });

    render(<Dashboard />);

    const cityName = await screen.findByText(/fortaleza/i);
    expect(cityName).toBeTruthy();
  });

  it('should be show another selected weather city', async () => {
    jest
      .spyOn(api, 'get')
      .mockResolvedValueOnce({ data: mockWeatherAPIResponse })
      .mockResolvedValueOnce({ data: mockCityAPIResponse })
      .mockResolvedValueOnce({ data: mockWeatherAPIResponse });

    render(<Dashboard />);

    await waitForElementToBeRemoved(() => screen.queryByTestId('loading'))
    
    const cityName = 'Fortaleza'

    await waitFor(() => act(() => {
      const searchInput = screen.getByTestId('search-input')
      fireEvent.changeText(searchInput, cityName)
    }))

    await waitFor(() => act(() => {
      fireEvent.press(screen.getByText(cityName, { exact: false }))
    }))

    expect(screen.getByText(cityName, { exact: false })).toBeTruthy();
  });
});
