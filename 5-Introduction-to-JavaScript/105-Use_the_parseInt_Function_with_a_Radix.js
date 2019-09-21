//This lesson introduces the optional second argument for the parseInt() function, which is the radix.  The radix provides the base of the number in the string.

function convertToInteger(str) {
  return parseInt(str, 2);
}

convertToInteger("10011");
