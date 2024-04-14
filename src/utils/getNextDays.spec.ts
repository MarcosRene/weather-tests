import { getNextDays } from './getNextDays';

describe('getNextDays', () => {
  it('should be return next fine days', () => {
    const days = getNextDays();
  
    expect(days.length).toBe(5);
  });
})