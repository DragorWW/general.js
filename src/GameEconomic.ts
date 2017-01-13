export default class GameEconomic {
  territorySize: number;

  /**
   * Количесво зерна
   */
  private cornCount: number;
  /**
   * Количесво ученых
   */
  private scientistCount: number;
  private soildersCount: number;
  private population: number;

  constructor () {

  }

  set corn (corn : number) {
    this.cornCount = corn;
  }
  get corn () : number {
    return this.cornCount;
  }

  saleCorn (corn) {}

  bayCorn (corn) {}

  trainScientist (scientist) {}

  dismissionScientist (scientist) {}

  trainSoldiers (soldiers) {}

  dismissionSoldiers (soldiers) {}

  /**
   * Прирост зерна.
   * @type {number}
   */
  get incrementCron () {}

  /**
   * Прирост населения
   * @type {number}
   */
  get incrementPopulation () {
  }

  /**
   * Расходы на ученых
   * @type {number}
   */
  get chargesScientist () {}

  /**
   * Расходы на армию
   * @type {number}
   */
  get chargesSoldiers () {}

  /**
   * Баланс
   * @type {number}
   */
  get balance () {

  }
}
