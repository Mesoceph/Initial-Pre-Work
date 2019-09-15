//In this lesson, I learned about how to create a function with parameters.  When calling the function, arguments (parameter values) must be provided.  Different arguments can be used every time the function is called without changing the original function.

// Example
function ourFunctionWithArgs(a, b) {
  console.log(a - b);
}
ourFunctionWithArgs(10, 5); // Outputs 5

// Only change code below this line.

function functionWithArgs(value1, value2) {
  console.log(value1 + value2);
}

functionWithArgs(3,6);
