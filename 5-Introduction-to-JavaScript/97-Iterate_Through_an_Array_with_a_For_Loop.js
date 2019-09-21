//This lesson introduces a technique for iterating through the contents of an array using a for loop with the condition that the loop variable is less than the length of the array.

// Example
var ourArr = [ 9, 10, 11, 12];
var ourTotal = 0;

for (var i = 0; i < ourArr.length; i++) {
  ourTotal += ourArr[i];
}

// Setup
var myArr = [ 2, 3, 4, 5, 6];

// Only change code below this line

var total = 0;

for (i = 0; i < myArr.length; i++) {
  total += myArr[i];
}
