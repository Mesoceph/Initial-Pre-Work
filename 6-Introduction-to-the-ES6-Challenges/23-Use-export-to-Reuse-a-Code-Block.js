//In this lesson, I learned to code the export statements that are the necessary counterpart to import statements.  Export statements create variables or functions that can be imported in another file and then reused.  To export a function, the syntax is: export { functionName }.  To export variables, the syntax is: export const/let/var variableName = [variableValue].  A variable and a function may be exported together using the syntax: export { functionName, variableName } given that the function and variable have already been defined.

"use strict";
export const foo = "bar";
export const bar = "foo";
