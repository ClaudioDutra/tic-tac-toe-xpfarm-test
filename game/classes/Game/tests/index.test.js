const Game = require('..');

const mockedPlayer = { selectPosition: jest.fn() };
const mockedBoard = {
  setState: [], state: [], checkResults: jest.fn(), render: jest.fn(),
};

describe('Game class', () => {
  test('should create object when all dependencies has sent', () => {
    const board = mockedBoard;
    const playerX = mockedPlayer;
    const playerY = mockedPlayer;
    const game = new Game({ board, playerX, playerY });
    expect(game).toHaveProperty('play');
  });
  test.each(['board', 'playerY', 'playerX'])(
    'should throw error when the parameter %s is missing on constructor',
    (input) => {
      const board = mockedBoard;
      const playerX = mockedPlayer;
      const playerY = mockedPlayer;

      const gameProps = { board, playerX, playerY };
      delete gameProps[input];

      expect(() => {
        new Game(gameProps);
      }).toThrow();
    },
  );
  test('should inform Tie wins when the boards return Tie on check', async () => {
    const board = mockedBoard;
    const playerX = mockedPlayer;
    const playerY = mockedPlayer;
    const checkResultsSpy = jest.spyOn(board, 'checkResults').mockReturnValue('Tie');
    const logSpy = jest.spyOn(console, 'log');
    const game = new Game({ board, playerX, playerY });
    await game.play();
    expect(checkResultsSpy).toHaveBeenCalled();
    expect(logSpy).toHaveBeenCalledWith('Game finished in a Tie');
  });
  test('should inform Player 1 wins when the boards return P1 on check', async () => {
    const board = mockedBoard;
    const playerX = mockedPlayer;
    const playerY = mockedPlayer;
    const checkResultsSpy = jest.spyOn(board, 'checkResults').mockReturnValue('P1');
    const logSpy = jest.spyOn(console, 'log');
    const game = new Game({ board, playerX, playerY });
    await game.play();
    expect(checkResultsSpy).toHaveBeenCalled();
    expect(logSpy).toHaveBeenCalledWith('Player 1 wins!!!!');
  });
  test('should inform Player 2 wins when the boards return P2 on check', async () => {
    const board = mockedBoard;
    const playerX = mockedPlayer;
    const playerY = mockedPlayer;
    const checkResultsSpy = jest.spyOn(board, 'checkResults').mockReturnValue('P2');
    const logSpy = jest.spyOn(console, 'log');
    const game = new Game({ board, playerX, playerY });
    await game.play();
    expect(checkResultsSpy).toHaveBeenCalled();
    expect(logSpy).toHaveBeenCalledWith('Player 2 wins!!!!');
  });
});
