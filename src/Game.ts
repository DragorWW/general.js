import * as constants from './const';

import Player from './Player';
import Human from './Human';
import Computer from './Computer';

export default class Game {
  private playerList: Array<Player>;

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
  constructor(public type : string, public mapSize : number, public countryCount : number, public playerCount : number) {

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
      .map(i => new Human)
      .forEach(i => this.playerList.push(i));
  }

  generateMap() {

  }

  selectCountry(country, playerName) {
    if (!constants.COUNTRY_LIST_NAME.include(country)) {
      new Error('Country name is not valid');
    }
  }
}

export const difficultLevel = (level = constants.GAME_COUNTRY_COUNT_MIN) => (level/constants.GAME_COUNTRY_COUNT_MIN) * 100;
