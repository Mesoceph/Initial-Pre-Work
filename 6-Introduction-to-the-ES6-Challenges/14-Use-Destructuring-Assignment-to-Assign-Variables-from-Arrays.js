//In this lesson, I learned how to assign variables in arrays using destructuring syntax.  The syntax is very simple: const [a, b] = arrayName will return the first two values of the array as variables a and b.  Commas can be used to select other indexes: const [,, a, b] = arrayName will return the 3rd and 4th indexes as a and b.

let a = 8, b = 6;
(() => {
  "use strict";
  // change code below this line
  [b, a] = [a, b];
  // change code above this line
})();
console.log(a); // should be 6
console.log(b); // should be 8
