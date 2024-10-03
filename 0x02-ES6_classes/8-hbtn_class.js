export default class HolbertonClass {
  constructor(size, location) {
    this.size = size;
    this.location = location;
  }

  get size() {
    return this._size; // eslint-disable-line no-underscore-dangle
  }

  set size(size) {
    if (typeof size !== 'number') {
      throw new TypeError('size must be a number');
    }
    this._size = size; // eslint-disable-line no-underscore-dangle
  }

  get location() {
    return this._location; // eslint-disable-line no-underscore-dangle
  }

  set location(location) {
    if (typeof location !== 'string') {
      throw new TypeError('location must be a string');
    }
    this._location = location; // eslint-disable-line no-underscore-dangle
  }

  toString() {
    return this.location;
  }

  valueOf() {
    return this.size;
  }
}
