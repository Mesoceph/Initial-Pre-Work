//In this lesson, I learned that the final-statement in a for loop can iterate by something other than 1.  For example, the statement i += 2 will cause 2 to be added to the value of i on each iteration so that i has only even or only odd values (depending on its initial value).

// Example
var ourArray = [];

for (var i = 0; i < 10; i += 2) {
  ourArray.push(i);
}

// Setup
var myArray = [];

// Only change code below this line.

for (i = 1; i < 10; i += 2) {
  myArray.push(i);
}
