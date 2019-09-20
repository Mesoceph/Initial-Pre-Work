//This lesson introduces bracket notation for accessing object properties.  Dot notation cannot be used with properties that have a space in their names, and so then bracket notation must be used (although bracket notation CAN be used in other situations as well).  For bracket notation, use the object name followed by the property name enclosed in brackets and quotes, such as objectName["property name"].

// Setup
var testObj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water"
};

// Only change code below this line

var entreeValue = testObj["an entree"];   // Change this line
var drinkValue = testObj["the drink"];    // Change this line
