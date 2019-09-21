//This lesson introduces the import statement, which allows the user to import specific functions or other sections of code from a larger file.  The syntax for an import function is: import { itemName } from "fileName".  Note that the file name must also contain the file path if it is not in the same directory as the current file.

"use strict";
import { capitalizeString } from "string_functions";
capitalizeString("hello!");
