//This lesson demonstrates that, while arrays declared with const cannot be changed using the array identifier and a new array, the array is still mutable using element assignment.

const s = [5, 7, 2];
function editInPlace() {
  "use strict";
  // change code below this line

  s[0] = 2;
  s[1] = 5;
  s[2] = 7;

  // change code above this line
}
editInPlace();
