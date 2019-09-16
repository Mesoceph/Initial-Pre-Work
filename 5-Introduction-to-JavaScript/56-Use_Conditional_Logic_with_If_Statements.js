//This lesson introduces conditional logic with if statements.  An if statement evaluates whether the condition is true and only executes the code within the statement if it is true.  Otherwise, it skips the code and goes directly to the next statement.

// Example
function ourTrueOrFalse(isItTrue) {
  if (isItTrue) {
    return "Yes, it's true";
  }
  return "No, it's false";
}

// Setup
function trueOrFalse(wasThatTrue) {

  // Only change code below this line.
  if (wasThatTrue) {
      return "Yes, that was true"
  }
  else return "No, that was false"


  // Only change code above this line.

}

// Change this value to test
trueOrFalse(true);
