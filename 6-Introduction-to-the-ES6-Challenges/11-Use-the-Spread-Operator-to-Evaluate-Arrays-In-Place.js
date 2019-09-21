//In this lesson, I learned about the spread operator.  The spread operator (...arrayName) spreads the contents of an array into comma-separated arguments.  It only works within the code, such as inside an array-literal (e.g. [...arrayName]) or as function declarations.

const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
(function() {
  "use strict";
  arr2 = [...arr1]; // change this line
})();
console.log(arr2);
