// 6-sky_high.js
import Building from './5-building'; // Remove the ".js" extension

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    // Call the constructor of the parent class (Building)
    super(sqft);

    // Store attributes in underscore attribute version
    this._floors = floors;
  }

  // Getter for floors attribute
  get floors() {
    return this._floors;
  }

  // Override the method from the parent class
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}
