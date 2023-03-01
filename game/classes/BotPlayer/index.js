import Player from '../Player';

export default class BotPlayer extends Player {
  constructor(...params) {
    super(...params);
    this.setSelectPosition = BotPlayer.movement;
  }

  static async movement(states = []) {

    }
  }
}
