import { expect, should } from 'chai';
import 'mocha';

import Game, {difficultLevel} from '../src/Game';
import * as constants from '../src/const';

describe('Game init', () => {
  const game = new Game(constants.GAME_TYPE_TRANING, 20, 2, 1);
  it('check all player count', () => {
    expect(game.playerList).to.be.length(2);
  });
});

describe('difficultLevel', () => {
  it('minimal level', () => {
    expect(difficultLevel(2)).to.be.equal(0.1);
  })
  it('max level', () => {
    expect(difficultLevel(20)).to.be.equal(1);
  })
});
