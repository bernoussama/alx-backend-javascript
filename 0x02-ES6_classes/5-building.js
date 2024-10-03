export default class Building {
  constructor(sqft) {
    this.sqft = sqft;
  }

  get sqft() {
    return this._sqft; // eslint-disable-line no-underscore-dangle
  }

  set sqft(sqft) {
    if (typeof sqft !== 'number') {
      throw new TypeError('Building must have a number for its square footage');
    }
    this._sqft = sqft; // eslint-disable-line no-underscore-dangle
  }

  evacuationWarningMessage() { // eslint-disable-line class-methods-use-this
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}
