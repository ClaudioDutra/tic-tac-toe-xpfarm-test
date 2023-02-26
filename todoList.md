## Development Todo

- [X] **Board game class.**
  - [X] Get current state.
  - [X] Render the board.
  - [X] Update the board state.
  - [X] Look for winners by checking the board state.
- [ ] **Player.**
  - [X] Set name.
  - [X] Set make a move.
- [ ] **DummyBot.**
  - [ ] Extends the Player.
  - [ ] Implements the logic for position selection.
    - [ ] _Should receive the board and the function for the move._

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
