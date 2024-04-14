import { render, screen } from '@testing-library/react-native';
import { NextDays } from '@components/NextDays';

import clearDay from '@assets/clear_day.svg';

describe('Component: NextDays', () => {
  it('should be render day', () => {
    render(
      <NextDays
        data={[
          {
            day: '14/04',
            min: '30°c',
            max: '34°c',
            icon: clearDay,
            weather: 'Céu limpo',
          },
          {
            day: '15/04',
            min: '28°c',
            max: '30°c',
            icon: clearDay,
            weather: 'Céu limpo',
          },
          {
            day: '16/04',
            min: '25°c',
            max: '29°c',
            icon: clearDay,
            weather: 'Nublado',
          },
        ]}
      />
    );

    expect(screen.getByText('15/04')).toBeTruthy();
  });
});
