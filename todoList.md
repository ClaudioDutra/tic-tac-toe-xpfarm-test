## Development Todo

- [X] **Board game class.**
  - [X] Get current state.
  - [X] Render the board.
  - [X] Update the board state.
  - [X] Look for winners by checking the board state.
  
- [X] **Player.**
  - [X] Set name.
  - [X] Set make a move.

- [X] **DummyBot.**
  - [X] Extends the Player.
  - [X] Implements the logic for position selection.
    - [X] _Should receive the board and the function for the move._

- [X] **RealPlayer.**
  - [X] Extends the Player.
  - [X] Get move from input.
  
- [ ] **Game.**
  - [ ] Setup the players (if it is a bot or real player).
  - [ ] setup the board.
  - [ ] Get each move.
    - [ ] _Check if someone wins in that move._
    - [ ] _Inform winner or Tie._
  - [ ] Ask if the game should start again.
