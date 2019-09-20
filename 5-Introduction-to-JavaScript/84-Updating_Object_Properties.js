//This lesson demonstrates that it is possible to update object properties just as it is possible to update array properties.  To do so, the property to update is indicated using dot or bracket notation followed by the '=' sign and then the new value for the property.

// Example
var ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};

ourDog.name = "Happy Camper";

// Setup
var myDog = {
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};

// Only change code below this line.

myDog["name"] = "Happy Coder";
