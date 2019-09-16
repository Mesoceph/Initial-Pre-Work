//In this lesson, I applied what I learned in the last two lessons to create a function that compares two arguments for strict equality.

// Setup
function compareEquality(a, b) {
  if (a === b) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

// Change this value to test
compareEquality(10, "10");
