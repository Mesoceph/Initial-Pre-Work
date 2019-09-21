//In this lesson, I learned that multiple ternary operators can be strung together to create a single-line equivalent to an if-else if-else sequence (potentially with multiple else if statements).  This could greatly reduce the length of code when multiple options are needed.

function checkSign(num) {
  return (num == 0) ? "zero" : (num > 0) ? "positive" : "negative";
}

checkSign(10);
