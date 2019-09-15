//This lesson demonstrates that it is possible to have both local and global variables with the same name and different values.  When the local variable is present, it overrides the global variable.

// Setup
var outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line
  var outerWear = "sweater";


  // Only change code above this line
  return outerWear;
}

myOutfit();
