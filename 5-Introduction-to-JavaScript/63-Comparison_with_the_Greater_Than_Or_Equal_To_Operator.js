//In this lesson, I learned about the 'greater than or equal to' operator (>=).  This operator works in the same way as the 'greater than' operator except that equivalent values will also return a "True" boolean value.

function testGreaterOrEqual(val) {
  if (val >= 20) {  // Change this line
    return "20 or Over";
  }

  if (val >= 10) {  // Change this line
    return "10 or Over";
  }

  return "Less than 10";
}

// Change this value to test
testGreaterOrEqual(10);
