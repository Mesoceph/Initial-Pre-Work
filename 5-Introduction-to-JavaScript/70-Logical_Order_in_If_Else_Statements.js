//This lesson emphasizes that order is of great importance when using else if statements because if the first logical criterion is met, the following criteria will not be evaluated.

function orderMyLogic(val) {
  if (val < 5) {
    return "Less than 5";
  }
  else if (val < 10) {
    return "Less than 10";
  }
  else {
    return "Greater than or equal to 10";
  }
}

// Change this value to test
orderMyLogic(7);
