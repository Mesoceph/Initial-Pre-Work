//In this lesson, I learned to check whether a property exists within an object using the .hasOwnProperty() method, which returns a boolean 'true' value if the property exists and 'false' value if it does not.  The syntax is as follows: objectName.hasOwnProperty(propertyName).

// Setup
var myObj = {
  gift: "pony",
  pet: "kitten",
  bed: "sleigh"
};

function checkObj(checkProp) {
  // Your Code Here

  if (myObj.hasOwnProperty(checkProp)) {
    return myObj[checkProp];
  }
  else {
    return "Not Found";
  }
}

// Test your code by modifying these values
checkObj("gift");
