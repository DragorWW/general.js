import Player from './Player';
import * as constants from './const';

/**
 * Класс игрока компютера
 *
 * @export
 * @class Computer
 * @extends {Player}
 */
export default class Computer extends Player {
  constructor () {
    super('test', constants.COUNTRY_LIST_NAME[0]);
  }
}
