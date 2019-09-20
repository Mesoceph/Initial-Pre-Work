//In this lesson, I learned about the default option for switch statements.  The default option should follow all of the specific case statements and provides an option to execute if none of the case values matched the argument.  Thus, it functions like the final else statement for an if/else if/else chain of statements.

function switchOfStuff(val) {
  var answer = "";
  // Only change code below this line
  switch (val) {
    case "a":
      answer = "apple";
      break;
    case "b":
      answer = "bird";
      break;
    case "c":
      answer = "cat";
      break;
    default:
      answer = "stuff";
      break;
  }


  // Only change code above this line
  return answer;
}

// Change this value to test
switchOfStuff(1);
