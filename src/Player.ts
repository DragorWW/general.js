import GameEconomic from './GameEconomic';

/**
 * Базовый класс работы игрока
 *
 * @export
 * @class Player
 */
export default abstract class Player {
  gameEconomic: GameEconomic;

  protected constructor (readonly name, readonly country) {

    this.gameEconomic = new GameEconomic();
  }
}
