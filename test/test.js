import Game from '../src/Game';
import * as constants from '../src/const';

const assert = require('chai').assert;

describe('Array', function() {
    it('fdg', () => {
      const game = new Game({
        type: constants.GAME_TYPE_TRANING,
        mapSize: 100,
        countryCount: 20,
        playerCount: 1,
      });
      console.log(game);
      assert.equal(game, 1);
    });
});
