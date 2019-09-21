//This lesson introduces the keyword "const", which creates a read-only variable.  Thus, once the variable is declared with the keyword const, its value cannot be changed.  Best practice is to name variables declared with const using all caps and separate words using underscores.

function printManyTimes(str) {
  "use strict";

  // change code below this line

  const SENTENCE = str + " is cool!";
  for(let i = 0; i < str.length; i+=2) {
    console.log(SENTENCE);
  }

  // change code above this line

}
printManyTimes("freeCodeCamp");
