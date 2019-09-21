//This lesson introduces the rest operator.  The rest operator allows a function to take a variable number of parameters.  To use the rest operator, insert ...args between the parentheses in the function declaration.

const sum = (function() {
  "use strict";
  return function sum(...args) {
    return args.reduce((a, b) => a + b, 0);
  };
})();
console.log(sum(1, 2, 3)); // 6
