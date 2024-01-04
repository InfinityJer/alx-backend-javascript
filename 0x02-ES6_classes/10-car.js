// 10-car.js
const cloneSymbol = Symbol('clone');

export default class Car {
  constructor(brand, motor, color) {
    // Store attributes in underscore attribute version
    this._brand = brand;
    this._motor = motor;
    this._color = color;

    // Attach the cloneCar method to the instance
    this[cloneSymbol] = this.cloneCar.bind(this);
  }

  // Getter for brand attribute
  get brand() {
    return this._brand;
  }

  // Getter for motor attribute
  get motor() {
    return this._motor;
  }

  // Getter for color attribute
  get color() {
    return this._color;
  }

  // Method to clone the car
  cloneCar() {
    // Create a shallow copy of the object using Object.assign
    const clone = Object.assign(Object.create(Object.getPrototypeOf(this)), this);

    // Detach the cloneCar method from the clone
    delete clone[cloneSymbol];

    return clone;
  }
}
