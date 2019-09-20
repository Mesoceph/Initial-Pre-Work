//This lesson introduces the 'less than' operator.  This operator is the opposite of the 'greater than' operator: instead of returning "true" for values equal to or larger than the specified value, it returns "true" for values equal to or smaller than the specified value.

function testLessThan(val) {
  if (val < 25) {  // Change this line
    return "Under 25";
  }

  if (val < 55) {  // Change this line
    return "Under 55";
  }

  return "55 or Over";
}

// Change this value to test
testLessThan(10);
