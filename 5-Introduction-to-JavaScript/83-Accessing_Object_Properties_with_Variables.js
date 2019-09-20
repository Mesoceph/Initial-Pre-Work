//In this lesson, I learned to use bracket notation with a variable name inside the brackets to look up property values stored within an object.  This is useful when the property name needs to be collected dynamically into a variable throughout the course of the program (rather than simply being known when the program starts) or when iterating through the properties within an object.

// Setup
var testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};

// Only change code below this line;

var playerNumber = 16;       // Change this Line
var player = testObj[playerNumber];   // Change this Line
