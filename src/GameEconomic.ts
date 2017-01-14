export default class GameEconomic {
  /**
   * Размер территории
   */
  territorySize: number;

  /**
   * Колличесво зерна
   */
  private cornCount: number;
  /**
   * Колличесво ученых
   */
  private scientistCount: number;
  /**
   * Колличесво солдат
   */
  private soildersCount: number;
  /**
   * Колличесво населения
   */
  private populationCount: number;
  /**
   * Колличесво крестьян
   */
  private peasantCount: number;
  /**
   * Колличесво денег
   */
  private moneyCount: number;

  constructor(territorySize : number) {
    this.territorySize = territorySize;

  }

  set corn(corn: number) {
    this.cornCount = corn;
  }
  get corn(): number {
    return this.cornCount;
  }

  get population() {
    return this.populationCount;
  }

  get maxPopulation(): number {
    return this.territorySize;
  }

  get peasant(): number {
    return this.populationCount;
  }
  get soldiers(): number {
    return 0;
  }
  get scientist(): number {
    return 0;
  }
  get money(): number {
    return 0;
  }
  /**
   * Прирост зерна.
   */
  get incrementCron(): number {
    return 0;
  }

  /**
   * Прирост населения
   */
  get incrementPopulation(): number {
    return 0;
  }

  /**
   * Расходы на ученых
   */
  get chargesScientist(): number {
    return 0;
  }

  /**
   * Расходы на армию
   */
  get chargesSoldiers(): number {
    return 0;
  }

  /**
   * Баланс
   */
  get balance(): number {
    return 0;
  }

  // actions
  saleCorn(corn) {

  }
  bayCorn(corn) {

  }
  sowCorn(corn) {

  }

  trainScientist(scientist) { }

  dismissionScientist(scientist) { }

  trainSoldiers(soldiers) { }

  dismissionSoldiers(soldiers) { }
}
