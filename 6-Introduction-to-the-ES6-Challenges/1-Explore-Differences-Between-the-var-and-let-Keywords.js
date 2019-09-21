//This lesson introduces the keyword "let", which functions much like the keyword "var" except that it only allows a variable to be declared once and throws an error if the variable is declared again.  The syntax for using let is: let [variable name] = [variable value];

let catName = "";
let quote = "";
function catTalk() {
  "use strict";

  catName = "Oliver";
  quote = catName + " says Meow!";

}
catTalk();
