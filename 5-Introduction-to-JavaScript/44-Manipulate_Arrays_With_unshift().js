//In this lesson, I learned to use the unshift() function.  This function is the exact opposite of the shift() function.  It adds whatever data is provided as a parameter for the unshift() function to the beginning of the array.

// Example
var ourArray = ["Stimpson", "J", "cat"];
ourArray.shift(); // ourArray now equals ["J", "cat"]
ourArray.unshift("Happy");
// ourArray now equals ["Happy", "J", "cat"]

// Setup
var myArray = [["John", 23], ["dog", 3]];
myArray.shift();

// Only change code below this line.

myArray.unshift(["Paul", 35]);
