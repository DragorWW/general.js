import * as constants from './const';
import Game from './Game';

new Game({
    type: constants.GAME_TYPE_TRANING,
    mapSize: 30,
    countryCount: 4,
    playerCount: 1
})