//In this lesson, I learned to use for loops in JavaScript.  The syntax for a for loop is: for ([initialization]; [condition]; [final-expression]) {}.  The initialization statement only executes before the first iteration of the for loop and sets the initial conditions for the loop variable.  The condition statement determines how long the for loop continues to execute; the loop will execute as long as the condition is true.  The final-expression statement executes at the end of each loop iteration and is generally used to increment (or decrement) the loop variable.

// Example
var ourArray = [];

for (var i = 0; i < 5; i++) {
  ourArray.push(i);
}

// Setup
var myArray = [];

// Only change code below this line.

for (var i = 1; i < 6; i++) {
    myArray.push(i);
}
