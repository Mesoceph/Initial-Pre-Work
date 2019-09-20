//In this lesson, I learned about switch statements.  Within a switch statement, you can provide many possible values.  JavaScript executes code starting with the first case value that is strictly equal to the argument and continuing until the next break statement.  This provides an alternative to if, else if, and else statements when many options are needed.

function caseInSwitch(val) {
  var answer = "";
  // Only change code below this line
  switch (val) {
    case 1:
      answer = "alpha";
      break;
    case 2:
      answer = "beta";
      break;
    case 3:
      answer = "gamma";
      break;
    case 4:
      answer = "delta";
      break;
  }


  // Only change code above this line
  return answer;
}

// Change this value to test
caseInSwitch(1);
