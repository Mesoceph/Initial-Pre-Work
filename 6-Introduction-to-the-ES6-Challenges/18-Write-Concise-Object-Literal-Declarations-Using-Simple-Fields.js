//This lesson introduces the syntax for creating an object literal more simply and with less redundancy that in ES5.  It is no longer necessary to write {x:x, y:y}, but instead, {x, y} is sufficient.

const createPerson = (name, age, gender) => {
  "use strict";
  // change code below this line
  return {
    name,
    age,
    gender
  };
  // change code above this line
};
console.log(createPerson("Zodiac Hasbro", 56, "male")); // returns a proper object
