//This lesson introduces the "less than or equal to" operator, which is the opposite of the "greater than or equal to" operator.  This operator returns a boolean "true" value if the input value is either smaller than or is equal to the right-hand value.

function testLessOrEqual(val) {
  if (val <= 12) {  // Change this line
    return "Smaller Than or Equal to 12";
  }

  if (val <= 24) {  // Change this line
    return "Smaller Than or Equal to 24";
  }

  return "More Than 24";
}

// Change this value to test
testLessOrEqual(10);
