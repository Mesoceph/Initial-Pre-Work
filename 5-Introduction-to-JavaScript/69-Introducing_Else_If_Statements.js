//This lesson introduces else if statements, which can be added in between an if statement and an else statement to provide three or more actions based on the logical conditions set.

function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  }

  else if (val < 5) {
    return "Smaller than 5";
  }

  else {return "Between 5 and 10";}
}

// Change this value to test
testElseIf(7);
