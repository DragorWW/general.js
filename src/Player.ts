import GameEconomic from './GameEconomic';
import {Country} from './const';

/**
 * Базовый класс работы игрока
 *
 * @export
 * @class Player
 */
abstract class Player {
  gameEconomic: GameEconomic;

  protected constructor (readonly name : string, readonly country : Country) {

    this.gameEconomic = new GameEconomic(500);
  }
}

export default Player;
