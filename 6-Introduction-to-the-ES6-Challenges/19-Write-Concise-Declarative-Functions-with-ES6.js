//This lesson introduces the new, more concise syntax for declaring functions in ES6.  Rather than needing the function keyword, ES6 uses the syntax: functionName() {}.

// change code below this line
const bicycle = {
  gear: 2,
  setGear(newGear) {
    "use strict";
    this.gear = newGear;
  }
};
// change code above this line
bicycle.setGear(3);
console.log(bicycle.gear);
