//In this lesson, I learned about the 'greater than' operator (>).  This operator determines whether the value to the left of the operator is greater than the value to the right, and if so, then it returns a "true" Boolean value.  Otherwise, it returns the Boolean value "false".

function testGreaterThan(val) {
  if (val > 100) {  // Change this line
    return "Over 100";
  }

  if (val > 10) {  // Change this line
    return "Over 10";
  }

  return "10 or Under";
}

// Change this value to test
testGreaterThan(10);
