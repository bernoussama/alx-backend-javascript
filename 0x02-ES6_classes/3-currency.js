export default class Currency {
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  get code() {
    return this._code; // eslint-disable-line no-underscore-dangle
  }

  set code(value) {
    if (typeof value !== 'string') {
      throw new TypeError('code must be a string');
    }
    this._code = value; // eslint-disable-line no-underscore-dangle
  }

  get name() {
    return this._name; // eslint-disable-line no-underscore-dangle
  }

  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('name must be a string');
    }
    this._name = value; // eslint-disable-line no-underscore-dangle
  }

  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}
