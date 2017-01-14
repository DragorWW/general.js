import * as constants from './const';

import Player from './Player';
import Human from './Human';
import Computer from './Computer';

export default class Game {
  /** Список игроков */
  public playerList: Array<Player>;
  /** Номер игрока кто ходит */
  private playerStepId: number = 0;

  /**
   * Creates an instance of Game.
   *
   * @param {string} type Тип игры
   * @param {number} mapSize Размер карты
   * @param {number} countryCount количесво стран
   * @param {number} playerCount количесво игроков
   *
   * @memberOf Game
   */
  constructor(
    public type : string,
    public mapSize : number,
    public countryCount : number,
    public playerCount : number) {

    this.playerList = [];

    this.init();
  }
  private init() {
    this.addHumanPlayers();
    this.addComputerPlayers();
  }

  private addComputerPlayers() {
     Array(this.countryCount - this.playerCount)
     .map(i => new Computer())
     .forEach(i => this.playerList.push(i))
  }
  private addHumanPlayers() {
    Array(this.playerCount)
      .map(i => new Human('name', constants.COUNTRY_LIST_NAME[0]))
      .forEach(i => this.playerList.push(i));
  }

  generateMap() {

  }

  selectCountry(country, playerName) {
    if (constants.COUNTRY_LIST_NAME.indexOf(country) === -1) {
      return new Error('Country name is not valid');
    }
  }
}

export const difficultLevel = (countryCount = constants.GAME_COUNTRY_COUNT_MIN) => (countryCount/constants.GAME_COUNTRY_COUNT_MIN) / 10;
