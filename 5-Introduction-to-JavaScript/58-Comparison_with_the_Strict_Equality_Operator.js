//This lesson explains that the strict equality operator (===) is similar to the equality operator in that both compare the values and return Boolean (true/false) values depending on whether the values are equal.  However, the strict equality operator does not consider the same value equal when it is stored as different data types while the equality operator does.

// Setup
function testStrict(val) {
  if (val === 7) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

// Change this value to test
testStrict(10);
