import { jest } from '@jest/globals';
import BotPlayer from '..';

describe('BotPlayer Class', () => {
  test('should have Player properties', () => {
    const botPlayer = new BotPlayer();
    expect(botPlayer).toHaveProperty('name');
    expect(botPlayer).toHaveProperty('setName');
    expect(botPlayer).toHaveProperty('selectPosition');
  });
  describe('Static movement Method', () => {
    test('should select a valid position when all states are available', () => {
      const position = BotPlayer.movement();
      expect(position).toBeGreaterThanOrEqual(0);
      expect(position).toBeLessThanOrEqual(8);
    });
    test('should select a valid position when some states are available', () => {
      const statesMock = [null, 1, 2, 1, 2, null, 2, null, 1];
      const position = BotPlayer.movement(statesMock)
      expect(position).toBeGreaterThanOrEqual(0);
      expect(position).toBeLessThanOrEqual(8);
      expect(statesMock[position]).toBeNull();
    });
    test('should select the last position', () => {
      const statesMock = [1, 1, 2, 1, 2, 1, 2, null, 1];
      const position = BotPlayer.movement(statesMock)
      expect(position).toBeEqual(7);
    });
  });
});
