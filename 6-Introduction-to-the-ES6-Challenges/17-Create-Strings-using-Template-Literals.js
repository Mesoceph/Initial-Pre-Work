//This lesson introduces template literals.  Template literals provide a new way in ES6 to make complex strings, involving special characters, line breaks, and variables, with much more ease than in ES5.  Template literals are wraped by `` symbols (backticks) rather than quotes, and can contain line breaks and special characters.  Variables within the string are indicated by $(variableName) and do not require concatenation with the + symbol.

const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["id-blacklist", "no-dup-keys"]
};
function makeList(arr) {
  "use strict";

  // change code below this line
   const resultDisplayArray = [];
   for (var i=0; i<result.failure.length; i++) {
    resultDisplayArray[i] = `<li class="text-warning">${result.failure[i]}</li>`;
   }
  // change code above this line

  return resultDisplayArray;
}
/**
 * makeList(result.failure) should return:
 * [ `<li class="text-warning">no-var</li>`,
 *   `<li class="text-warning">var-on-top</li>`,
 *   `<li class="text-warning">linebreak</li>` ]
 **/
const resultDisplayArray = makeList(result.failure);
