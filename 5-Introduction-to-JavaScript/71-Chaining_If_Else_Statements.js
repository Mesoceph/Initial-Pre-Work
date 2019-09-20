//This lesson demonstrates that it is possible to chain together numerous else if statements between the if statement and else statement in order to provide a larger number of possible outputs or options.

function testSize(num) {
  // Only change code below this line
  if (num < 5) {
    return "Tiny";
  }
  else if (num < 10) {
    return "Small";
  }
  else if (num < 15) {
    return "Medium";
  }
  else if (num < 20) {
    return "Large";
  }
  else {
    return "Huge";
  }
  // Only change code above this line
}

// Change this value to test
testSize(7);
