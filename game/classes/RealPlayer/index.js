import inquirer from 'inquirer';
import Player from '../Player';

const referenceChoices = [
  {
    name: "Top Left",
    value: 0
  },
  {
    name: "Top Center",
    value: 1
  },
  {
    name: "Top Right",
    value: 2
  },
  {
    name: "Middle Left",
    value: 3
  },
  {
    name: "Middle Center",
    value: 4
  },
  {
    name: "Middle Right",
    value: 5
  },
  {
    name: "Botton Left",
    value: 6
  },
  {
    name: "Botton Center",
    value: 7
  },
  {
    name: "Botton Right",
    value: 8
  },
]
export default class RealPlayer extends Player {
  constructor(...params) {
    super(...params);
    this.setSelectPosition = RealPlayer.movement;
  }

  static async movement(states = []) {

    if (states.length && !states.some(state => state === null)) {
      console.log('There is no option available');
      return;
    }

    const choices = [];

    if (!states.length) {
      choices.push(...referenceChoices);
    } else {
      const nullIndexes = states.map((state, index) => ({ value: state, index })).filter(state => state);
      const filteredChoices = referenceChoices.filter(choice => nullIndexes.find(state => state.index === choice.value));
      choices.push(...filteredChoices);
    }

    const answer = await inquirer.prompt({
      name: 'playerMove',
      type: 'list',
      message: 'Chose your next move: ',
      choices
    });

    return answer.playerMove;
  }
}
