// 7-airport.js
export default class Airport {
  constructor(name, code) {
    // Store attributes in underscore attribute version
    this._name = name;
    this._code = code;
  }

  // Default string description should return the airport code
  toString() {
    return `[object ${this._code}]`;
  }

  // Getter for name attribute
  get name() {
    return this._name;
  }

  // Getter for code attribute
  get code() {
    return this._code;
  }
}
