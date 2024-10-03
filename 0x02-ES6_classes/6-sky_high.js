import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this.floors = floors;
  }

  get floors() {
    return this._floors; // eslint-disable-line no-underscore-dangle
  }

  set floors(floors) {
    if (typeof floors !== 'number') {
      throw new TypeError('floors must be a number');
    }
    this._floors = floors; // eslint-disable-line no-underscore-dangle
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this.floors} floors`;
  }
}
