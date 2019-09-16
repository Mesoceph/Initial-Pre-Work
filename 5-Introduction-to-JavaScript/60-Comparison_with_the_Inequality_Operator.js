//This lesson introduces the inequality operator (!=).  The inequality operator returns a value of true if the two values are NOT equal and returns a value of false if they are equal.  Thus, the inequality operator is the opposite of the equality operator.

// Setup
function testNotEqual(val) {
  if (val != 99) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

// Change this value to test
testNotEqual(10);
