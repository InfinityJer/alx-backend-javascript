// 100-evcar.js
import Car from './10-car.js';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    // Call the constructor of the parent class (Car)
    super(brand, motor, color);

    // Store the additional attribute in underscore attribute version
    this._range = range;
  }

  // Getter for range attribute
  get range() {
    return this._range;
  }

  // Override the cloneCar method
  cloneCar() {
    // Create a shallow copy of the object using Object.assign
    const clone = Object.assign(Object.create(Object.getPrototypeOf(this)), this);

    // Detach the cloneCar method from the clone
    delete clone[Symbol.for('clone')];

    // Return the clone as an instance of Car
    return new Car(clone._brand, clone._motor, clone._color);
  }
}
