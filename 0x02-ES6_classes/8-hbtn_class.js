// 8-hbtn_class.js
export default class HolbertonClass {
  constructor(size, location) {
    // Store attributes in underscore attribute version
    this._size = size;
    this._location = location;
  }

  // Cast the class into a Number, it should return the size
  valueOf() {
    return this._size;
  }

  // Cast the class into a String, it should return the location
  toString() {
    return this._location;
  }
}
