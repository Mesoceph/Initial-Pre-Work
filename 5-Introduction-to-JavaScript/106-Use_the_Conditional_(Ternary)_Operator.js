//This lesson introduces the ternary operator (also known as the conditional operator), which uses the syntax [condition] ? [statement if true]: [statement if false];  The ternary operator provides a one-line equivalent to an if-else statement.

function checkEqual(a, b) {
  return a == b ? true : false;
}

checkEqual(1, 2);
