//In this lesson, I applied numerous skills, such as using function arguments, using the push() and shift() functions, and defining a value for a function to return to create a function that removes a value from the first position in an array, adds the number specified in the arguments to the end of the array, and returns the manipulated array as well as the value that was removed from the function.

function nextInLine(arr, item) {
  // Your code here
  arr.push(item);
  var removed = arr.shift();
  return removed;  // Change this line
}

// Test Setup
var testArr = [1,2,3,4,5];

// Display Code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6)); // Modify this line to test
console.log("After: " + JSON.stringify(testArr));
