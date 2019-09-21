//This lesson introduces destructuring assignment, which is similar to the spread operator but works for objects rather than arrays.  In destructuring assignment, the syntax is const {propertyName1, propertyName2} = objectName.  It is also possible to reassign the properties to variables with different names using the syntax: const {propertyName1: newName1, propertyName2: newName2} = objectName.  Note that not all properties of the object must be reassigned for this to work; it is possible to reassign only the properties of interest.

const AVG_TEMPERATURES = {
  today: 77.5,
  tomorrow: 79
};

function getTempOfTmrw(avgTemperatures) {
  "use strict";
  // change code below this line
  const {tomorrow: tempOfTomorrow} = avgTemperatures; // change this line
  // change code above this line
  return tempOfTomorrow;
}

console.log(getTempOfTmrw(AVG_TEMPERATURES)); // should be 79
