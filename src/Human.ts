import Player from './Player';
import {Country} from './const';

import * as constants from './const';

export default class Human extends Player {
  constructor (readonly name : string, readonly country : Country) {
    super(name, country);
  }
}
