//This lesson introduces the equality operator (==).  This operator is used to compare two values and return the Boolean value of true if the values are equal and return false if they are not.  This operator is different than the single = that is used for assignment.

// Setup
function testEqual(val) {
  if (val == 12) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

// Change this value to test
testEqual(10);
