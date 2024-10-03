export default class Airport {
  constructor(name, code) {
    this.name = name;
    this.code = code;
  }

  get name() {
    return this._name; // eslint-disable-line no-underscore-dangle
  }

  set name(name) {
    if (typeof name !== 'string') {
      throw new TypeError('name must be a string');
    }
    this._name = name; // eslint-disable-line no-underscore-dangle
  }

  get code() {
    return this._code; // eslint-disable-line no-underscore-dangle
  }

  set code(code) {
    if (typeof code !== 'string') {
      throw new TypeError('code must be a string');
    }
    this._code = code; // eslint-disable-line no-underscore-dangle
  }

  get [Symbol.toStringTag]() {
    return this.code;
  }
}
