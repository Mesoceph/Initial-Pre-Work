//In this lesson, I learned how to use destructuring assignment to access nested objects and reassign them to variables.  The syntax is as follows: const {nameOfNestedObject: {nameOfProperty1: reassignedName1, nameOfProperty2: reassignedName2}} = objectName;

const LOCAL_FORECAST = {
  today: { min: 72, max: 83 },
  tomorrow: { min: 73.3, max: 84.6 }
};

function getMaxOfTmrw(forecast) {
  "use strict";
  // change code below this line
  const {tomorrow : {max: maxOfTomorrow}} = forecast; // change this line
  // change code above this line
  return maxOfTomorrow;
}

console.log(getMaxOfTmrw(LOCAL_FORECAST)); // should be 84.6
