//In this lesson, I learned about getters and setters.  Getters "get" the values stored within an object, and may perform calculations to the value before returning it to the user.  Setters "set" the value of the object, and define how to process the argument in order to set the value of the object property.

function makeClass() {
  "use strict";
  /* Alter code below this line */
  class Thermostat{
    constructor(temp) {
      this.temp = temp;
    }
    get tempCelsius() {
      return 5/9 * (this.temp -32);
    }
    set tempFar(tempCelsius) {
      this.temp = 9/5*tempCelsius +32;
    }
  }
  /* Alter code above this line */
  return Thermostat;
}
const Thermostat = makeClass();
const thermos = new Thermostat(76); // setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in C
thermos.temperature = 26;
temp = thermos.temperature; // 26 in C
