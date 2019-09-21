//In this lesson, I learned to set default parameters for functions in case an argument is not provided.  In order to do this, the parameter name in the function declaration is followed by the equals sign and then the default value.

const increment = (function() {
  "use strict";
  return function increment(number, value=1) {
    return number + value;
  };
})();
console.log(increment(5, 2)); // returns 7
console.log(increment(5)); // returns 6
