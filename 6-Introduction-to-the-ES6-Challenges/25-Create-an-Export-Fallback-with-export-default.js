//This lesson demonstrates how to determine the default export for a file in case an import of the file does not specify the item to import.  Only one value may be the default export for any given file.  values assigned with var, let, and const cannot be the default export.

"use strict";
export default function subtract(x,y) {return x - y;}
