//This lesson builds on the last by explaining that the keyword "let" creates variables with local scope when those variables are declared within a function, as does the keyword "var", but also creates variables with local scope when they are declared within a block, statement, or expression.

function checkScope() {
"use strict";
  let i = "function scope";
  if (true) {
    let i = "block scope";
    console.log("Block scope i is: ", i);
  }
  console.log("Function scope i is: ", i);
  return i;
}
