
const Game = require('..');
const RealPlayer = require('../../RealPlayer');
const Board = require('../../Board');
const BotPlayer = require('../../BotPlayer');

describe('Game class', () => {

  test('should create object when all dependencies has sent', () => {
    const board = new Board();
    const playerX = new RealPlayer()
    const playerY = new BotPlayer()
    const game = new Game({ board, playerX, playerY });
    expect(game).toHaveProperty('play');
  });
  test.each(['board', 'playerY', 'playerX'])(
    'should throw error when the parameter %s is missing on constructor',
    (input) => {
      const board = new Board();
      const playerX = new RealPlayer()
      const playerY = new BotPlayer()

      const gameProps = { board, playerX, playerY };
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
    const game = new Game({ board, playerX: realPlayer, playerY: botPlayer });
    game.play();
    expect(boardRenderSpy).toHaveBeenCalled();
    expect(makeBotMoveSpy).toHaveBeenCalled();
    expect(makeRealPlayerMoveSpy).toHaveBeenCalled();
  });

  test('should inform player x wins', () => {
    const board = new Board();
    const realPlayer = new RealPlayer()
    const botPlayer = new BotPlayer()
    const boardRenderSpy = jest.spyOn(board, 'render');
    const boardCheckSpy = jest.spyOn(board, 'checkResults').mockReturnValueOnce('P1');
    const makeRealPlayerMoveSpy = jest.spyOn(realPlayer, 'selectPosition').mockReturnValueOnce(0);
    const makeBotMoveSpy = jest.spyOn(botPlayer, 'selectPosition').mockReturnValueOnce(1);
    const game = new Game({ board, playerX: realPlayer, playerY: botPlayer });
    const logSpy = jest.spyOn(console, 'log');
    game.play();
    expect(logSpy).toHaveBeenCalledWith('Player 1 wins!!!!');
  });

  test('should inform player y wins', () => {
    const board = new Board();
    const realPlayer = new RealPlayer()
    const botPlayer = new BotPlayer()
    const boardRenderSpy = jest.spyOn(board, 'render');
    const boardCheckSpy = jest.spyOn(board, 'checkResults').mockReturnValueOnce('P2');
    const makeRealPlayerMoveSpy = jest.spyOn(realPlayer, 'selectPosition').mockReturnValueOnce(0);
    const makeBotMoveSpy = jest.spyOn(botPlayer, 'selectPosition').mockReturnValueOnce(1);
    const game = new Game({ board, playerX: realPlayer, playerY: botPlayer });
    const logSpy = jest.spyOn(console, 'log');
    game.play();
    expect(logSpy).toHaveBeenCalledWith('Player 2 wins!!!!');
  });

  test('should inform Tie', () => {
    const board = new Board();
    const realPlayer = new RealPlayer()
    const botPlayer = new BotPlayer()
    const boardRenderSpy = jest.spyOn(board, 'render');
    const boardCheckSpy = jest.spyOn(board, 'checkResults').mockReturnValueOnce('Tie');
    const makeRealPlayerMoveSpy = jest.spyOn(realPlayer, 'selectPosition').mockReturnValueOnce(0);
    const makeBotMoveSpy = jest.spyOn(botPlayer, 'selectPosition').mockReturnValueOnce(1);
    const game = new Game({ board, playerX: realPlayer, playerY: botPlayer });
    const logSpy = jest.spyOn(console, 'log');
    game.play();
    expect(logSpy).toHaveBeenCalledWith('Game finished in a Tie');
  });
});
