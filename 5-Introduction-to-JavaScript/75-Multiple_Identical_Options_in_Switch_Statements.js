//In this lesson, I learned how to combine multiple cases that trigger identical output so that the code for the output only has to be written once.  Because JavaScript will begin execution when it finds a case match and continue until the next break statement, the cases with the same output can be listed on consecutive lines, followed by code for the output and then finally a single break statement.

function sequentialSizes(val) {
  var answer = "";
  // Only change code below this line

  switch (val) {
    case 1:
    case 2:
    case 3:
      answer = "Low";
      break;
    case 4:
    case 5:
    case 6:
      answer = "Mid";
      break;
    case 7:
    case 8:
    case 9:
      answer = "High";
      break;
  }

  // Only change code above this line
  return answer;
}

// Change this value to test
sequentialSizes(1);
