import { jest } from '@jest/globals';

import Game from '..';
import RealPlayer from '../../RealPlayer';
import Board from '../../Board';
import BotPlayer from '../../BotPlayer';

describe('Game class', () => {

  test('should create object when all dependencies has sent', () => {
    const board = new Board();
    const realPlayer = new RealPlayer()
    const botPlayer = new BotPlayer()
    const game = new Game({ board, realPlayer, botPlayer });
    expect(game).toHaveProperty('play');
  });
  test.each(['board', 'realPlayer', 'botPlayer'])(
    'should throw error when the parameter %s is missing on constructor',
    (input) => {
      const board = new Board();
      const realPlayer = new RealPlayer()
      const botPlayer = new BotPlayer()

      const gameProps = { board, realPlayer, botPlayer };
      delete gameProps[input];

      expect(() => {
        new Game(gameProps);
      }).toThrow();
    }
  );
  test('should call function from other objects', () => {
    const board = new Board();
    const realPlayer = new RealPlayer()
    const botPlayer = new BotPlayer()
    const boardRenderSpy = jest.spyOn(board, 'render');
    const makeRealPlayerMoveSpy = jest.spyOn(realPlayer, 'selectPosition').mockReturnValueOnce(0);
    const makeBotMoveSpy = jest.spyOn(botPlayer, 'selectPosition').mockReturnValueOnce(1);
    const game = new Game({ board, realPlayer, botPlayer });
    game.play();
    expect(boardRenderSpy).toHaveBeenCalled();
    expect(makeBotMoveSpy).toHaveBeenCalled();
    expect(makeRealPlayerMoveSpy).toHaveBeenCalled();
  });
});
