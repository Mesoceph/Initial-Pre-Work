//In this lesson, I learned to use arrow notation with higher order functions such as map() and filter() and to chain such functions together.  I also looked up lessons from elsewhere in freecodecamp that taught how to use map() and filter() since I seem to have missed learning the higher order functions at some point.

const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];
const squareList = (arr) => {
  "use strict";
  // change code below this line
  const squaredIntegers = arr.filter((item) => item > 0 && item % parseInt(item) == 0).map((item) => item*item);
  // change code above this line
  return squaredIntegers;
};
// test your code
const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);
