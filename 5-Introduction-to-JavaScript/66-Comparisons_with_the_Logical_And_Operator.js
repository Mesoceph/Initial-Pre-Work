//This lesson introduces the "logical and" operator.  This operator provides a way to combine two logical criteria into one by requiring that both statements return a boolean "true" value in order for the entire statement to be true.  If either comparison is false, then the entire statement returns a boolean "false" value.

function testLogicalAnd(val) {
  // Only change code below this line

  if (val <= 50 && val >= 25) {
    return "Yes";
  }

  // Only change code above this line
  return "No";
}

// Change this value to test
testLogicalAnd(10);
