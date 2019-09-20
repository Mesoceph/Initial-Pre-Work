//In this lesson, I learned about the 'logical or' operator.  This operator returns a boolean "true" value if either of the operands (logical statements) is true.  If both operands are false, then the operator returns a value of false.

function testLogicalOr(val) {
  // Only change code below this line

  if (val > 20 || val < 10) {
    return "Outside";
  }

  // Only change code above this line
  return "Inside";
}

// Change this value to test
testLogicalOr(15);
