const Board = require('..');

describe('Board Class', () => {
  test.each(['render', 'setState', 'checkResults'])(
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
        expect(board.state).toBe([null, 1, 2, 2, 1, null, null, null, 1]);
      }).not.toThrow();
    });
  });
});
