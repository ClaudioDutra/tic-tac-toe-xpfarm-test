## Development Todo

- [ ] **Board game class.**
  - [ ] Get current state.
  - [ ] Render the board.
  - [ ] Update the board state.
  - [ ] Look for winners by checking the board state.
- [ ] **Player.**
  - [ ] Set names and selected marks.
  - [ ] Make a move.
    - [ ] _Should receive the board and the function for the move._
- [ ] **DummyBot.**
  - [ ] Extends the Player.
  - [ ] Implements the logic for position selection.
- [ ] **RealPlayer.**
  - [ ] Extends the Player.
  - [ ] Get move from input.
- [ ] **Game.**
  - [ ] Setup the players (if it is a bot or real player).
  - [ ] setup the board.
  - [ ] Get each move.
    - [ ] _Check if someone wins in that move._
    - [ ] _Inform winner or Tie._
  - [ ] Ask if the game should start again.


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
    test('should draw the board with provided positions', () => {
      const board = new Board();
      const log = jest.spyOn(console, 'log');
      board.render([null, null, null, null, null, null, null, null, 1]);
      expect(log).toHaveBeenCalledTimes(1);
      expect(log).toHaveBeenCalledWith(`
   |   |
___________
   |   |
___________
   |   | X `);
    });
    test('should throw on invalid parameter', () => {
      const board = new Board();
      expect(() => {
        board.render('invalid');
      }).toThrowError();
    });
    test('should throw on invalid list value', () => {
      const board = new Board();
      expect(() => {
        board.render([null, null, null, null, null, null, null, null, 'invalid']);
      }).toThrowError();
    });
    test('should throw on invalid list size', () => {
      const board = new Board();
      expect(() => {
        board.render([]);
      }).toThrowError();
    });
  });
