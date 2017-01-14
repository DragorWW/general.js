import { expect, should } from 'chai';
import 'mocha';

import GameEconomic from '../src/GameEconomic';


// Деньги	0
// Зерно	910
// Засев зерна	455

describe('GameEconomic', () => {
  describe('territory size 500', () => {
    const gameEconomic = new GameEconomic(500);
    it('population', () => {
      expect(gameEconomic.population).to.equal(455);
    });
    it('peasant', () => {
      expect(gameEconomic.peasant).to.equal(455);
    });
    it('soldiers', () => {
      expect(gameEconomic.soldiers).to.equal(0);
    });
    it('scientist', () => {
      expect(gameEconomic.scientist).to.equal(0);
    });
    it('maxPopulation', () => {
      expect(gameEconomic.maxPopulation).to.equal(500);
    });
    it('money', () => {
      expect(gameEconomic.money).to.equal(0);
    });

    it('chargesScientist', () => {
      expect(gameEconomic.chargesScientist).to.equal(0, 'Нет расхода на ученых');
    });
    it('incrementPopulation', () => {
      expect(gameEconomic.incrementPopulation).to.equal(15);
    });
  });
  describe('territory size 5000', () => {
    const gameEconomic = new GameEconomic(5000);
    it('chargesScientist', () => {
      expect(gameEconomic.chargesScientist).to.equal(0, 'Нет расхода на ученых');
    });
    it('population', () => {
      expect(gameEconomic.population).to.equal(4545);
    });
    it('incrementPopulation', () => {
      expect(gameEconomic.incrementPopulation).to.equal(137);
    });
  });

});
