const Board = require('..');

describe('Board Class', () => {
  test.each(['render', 'setState', 'state', 'checkResults'])(
    'should class have the property (%s)',
    (input) => {
      const board = new Board();
      expect(board).toHaveProperty(input);
    },
  );
  describe('setState Method', () => {
    test('should throw an error when the parameter is not a list', () => {
      const board = new Board();
      expect(() => {
        board.setState = 'not List';
      }).toThrow();
    });

    test('should throw an error when the parameter is a list with invalid size', () => {
      const board = new Board();
      expect(() => {
        board.setState = [];
      }).toThrow();
    });
    test('should throw an error when the list has right size but its value is not in ("null", "1", "2")', () => {
      const board = new Board();
      expect(() => {
        board.setState = [null, 1, 2, true, 'invalid value', null, null, null, null];
      }).toThrow();
    });
    test('should save the state when the parameter is valid', () => {
      const board = new Board();
      expect(() => {
        board.setState = [null, 1, 2, 2, 1, null, null, null, 1];
        expect(board.state).toStrictEqual([null, 1, 2, 2, 1, null, null, null, 1]);
      }).not.toThrow();
    });
  });
  describe('state get method', () => {
    test('should return default state when no state changes', () => {
      const board = new Board();
      const { state } = board;
      expect(state).toStrictEqual([null, null, null, null, null, null, null, null, null]);
    });
    test('should return default state when no state changes', () => {
      const board = new Board();
      board.setState = [1, null, null, null, null, null, null, null, null];
      const { state } = board;
      expect(state).toStrictEqual([1, null, null, null, null, null, null, null, null]);
    });
  });
  describe('Render Method', () => {
    test('should draw an empty board', () => {
      const board = new Board();
      const log = jest.spyOn(console, 'log');
      board.render();
      expect(log).toHaveBeenCalledTimes(1);
      expect(log).toHaveBeenCalledWith(`
   |   |
___________
   |   |
___________
   |   |   `);
    });
    test('should draw the board with updated state', () => {
      const board = new Board();
      board.setState = [null, null, null, null, null, null, null, null, 1];
      const log = jest.spyOn(console, 'log');
      board.render();
      expect(log).toHaveBeenCalledTimes(1);
      expect(log).toHaveBeenCalledWith(`
   |   |
___________
   |   |
___________
   |   | X `);
    });
  });
});
