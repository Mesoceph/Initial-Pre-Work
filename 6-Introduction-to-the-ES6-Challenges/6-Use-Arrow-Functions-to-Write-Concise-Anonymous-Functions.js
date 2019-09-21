//This lesson introduces arrow functions, which simplify the code for functions that will only be used once, particularly when the function contains only a return line.  In this case, the variable assignment and function can be condensed into a single line.  To create an arrow function, the normal unnamed function declaration (function() {}) is replaced with () => {}.  If there is no function body and only a return line, this can be further simplified to () => [return value].

const magic = () => new Date()
